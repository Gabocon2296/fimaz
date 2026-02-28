import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_CONFIG } from '@/lib/constants'
import { getOrganizationSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: {
    default: 'FIMAZ - Facultad de Informática Mazatlán | UAS',
    template: '%s | FIMAZ',
  },
  description: 'Portal académico oficial de la Facultad de Informática Mazatlán. Licenciaturas en Informática e Ingeniería en Sistemas de Información.',
  keywords: ['FIMAZ', 'informática', 'Mazatlán', 'UAS', 'licenciatura', 'ingeniería'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  authors: [{ name: 'FIMAZ', url: SITE_CONFIG.url }],
  creator: 'FIMAZ',
  publisher: 'FIMAZ',
  formatDetection: {
    email: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: SITE_CONFIG.url,
    title: 'FIMAZ - Facultad de Informática Mazatlán',
    description: 'Portal académico oficial de la Facultad de Informática Mazatlán',
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'FIMAZ',
        type: 'image/jpeg',
      },
    ],
    siteName: 'FIMAZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIMAZ - Facultad de Informática Mazatlán',
    description: 'Portal académico oficial de la Facultad de Informática Mazatlán',
    images: [`${SITE_CONFIG.url}/twitter-image.jpg`],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'FIMAZ',
  },
  verification: {
    google: 'verification-code-here', // Reemplazar con código real
    yandex: 'verification-code-here', // Reemplazar con código real
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="alternate" hrefLang="es-MX" href={SITE_CONFIG.url} />
        
        {/* Security Headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="permissions-policy" content="geolocation=(), microphone=(), camera=()" />
        
        {/* Preconnect para Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Cookie Consent Banner - Script en cliente */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (!document.cookie.includes('cookie_consent')) {
              const banner = document.createElement('div');
              banner.id = 'cookie-banner';
              banner.className = 'fixed bottom-0 left-0 right-0 bg-slate-900 text-white p-4 shadow-lg z-40';
              banner.innerHTML = \`
                <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p class="text-sm">Utilizamos cookies para mejorar tu experiencia. Consulta nuestra <a href="/legal/cookies" class="underline hover:text-blue-300">Política de Cookies</a>.</p>
                  <div class="flex gap-3">
                    <button onclick="document.cookie='cookie_consent=accepted;max-age=31536000;path=/';banner.remove();" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">Aceptar</button>
                    <button onclick="document.cookie='cookie_consent=rejected;max-age=31536000;path=/';banner.remove();" class="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded">Rechazar</button>
                  </div>
                </div>
              \`;
              document.body.appendChild(banner);
            }
          `
        }} />
      </body>
    </html>
  )
}
