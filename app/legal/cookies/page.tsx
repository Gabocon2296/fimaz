import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { COOKIES_SEO } from '@/lib/seo'

export const metadata = {
  title: COOKIES_SEO.title,
  description: COOKIES_SEO.description,
}

export default function CookiesPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-3 text-gray-400" />
            <span className="text-gray-600">Política de Cookies</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas nuestro sitio web. Se utilizan para recordar información sobre tu visita y mejorar tu experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tipos de Cookies que Usamos</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1. Cookies Esenciales (Tecnicamente Necesarias)</h3>
            <p>
              Son necesarias para el funcionamiento básico del sitio. No requieren consentimiento pero debes conocerlas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Session ID:</strong> Mantiene tu sesión activa</li>
              <li><strong>CSRF Token:</strong> Protección contra ataques</li>
              <li><strong>Language:</strong> Preferencia de idioma</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2. Cookies de Análisis</h3>
            <p>
              Nos ayudan a entender cómo utilizas el sitio para mejorarlo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> Estadísticas de uso del sitio</li>
              <li>Páginas visitadas, tiempo en el sitio, tasa de rebote</li>
              <li>Información sobre navegadores y dispositivos utilizados</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3. Cookies de Funcionalidad</h3>
            <p>
              Mejoran tu experiencia recordando tus preferencias:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tema preferido (claro/oscuro)</li>
              <li>Formularios completados previamente</li>
              <li>Secciones expandidas/colapsadas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4. Cookies de Marketing</h3>
            <p>
              Se utilizan para publicidad personalizada (si las habilitas):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Ads y redes sociales</li>
              <li>Seguimiento de conversiones</li>
              <li>Solo con tu consentimiento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tabla de Cookies Específicas</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tipo</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Análisis</td>
                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Análisis</td>
                    <td className="border border-gray-300 px-4 py-2">24 horas</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">PHPSESSID</td>
                    <td className="border border-gray-300 px-4 py-2">Session del servidor</td>
                    <td className="border border-gray-300 px-4 py-2">Esencial</td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gestionar Cookies</h2>
            <p>
              Puedes controlar y eliminar cookies en cualquier momento a través de la configuración de tu navegador:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chrome:</strong> Configuración → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy → Cookies</li>
            </ul>
            <p className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <strong>Nota:</strong> Si desactivas algunas cookies esenciales, ciertos servicios del sitio podrían no funcionar correctamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Banner de Consentimiento</h2>
            <p>
              La primera vez que visitas nuestro sitio, verás un banner solicitando tu consentimiento para cookies. Puedes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Aceptar todas:</strong> Habilita todas las cookies</li>
              <li><strong>Rechazar todas:</strong> Solo cookies esenciales</li>
              <li><strong>Personalizar:</strong> Elige qué cookies permitir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies de Terceros</h2>
            <p>
              Utilizamos servicios de terceros que pueden colocar cookies:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de privacidad</a></li>
              <li><strong>Google Fonts:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Política de privacidad</a></li>
              <li><strong>Redes Sociales:</strong> Facebook, Twitter, Instagram (si se habilita integración)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track (DNT)</h2>
            <p>
              Si tu navegador tiene habilitado "Do Not Track", respetaremos esa preferencia. Sin embargo, algunos servicios de terceros podrían no respetarlo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cambios en esta Política</h2>
            <p>
              Actualizaremos esta política cuando sea necesario. Los cambios serán publicados aquí con aviso previo.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Última actualización:</strong> 28 de febrero de 2026
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Preguntas sobre Cookies</h2>
            <p>Si tienes dudas, contáctanos:</p>
            <p className="mt-2">
              📧 <strong>cookies@fimaz.edu.mx</strong><br />
              📞 <strong>+52 (669) 981 1560</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
