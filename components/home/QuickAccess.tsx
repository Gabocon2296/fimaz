import Link from 'next/link'
import { BookOpen, Users, FileText, Bell, HelpCircle, LogIn } from 'lucide-react'

const quickLinks = [
  {
    icon: BookOpen,
    label: 'Programas Educativos',
    description: 'Licenciaturas y modalidades',
    href: '/programas',
  },
  {
    icon: Users,
    label: 'Portal de Estudiantes',
    description: 'Acceso a recursos estudiantiles',
    href: '/estudiantes',
  },
  {
    icon: FileText,
    label: 'Documentos y Trámites',
    description: 'Formularios y documentación',
    href: '/documentos',
  },
  {
    icon: Bell,
    label: 'Anuncios Importantes',
    description: 'Últimas noticias y avisos',
    href: '/blog',
  },
  {
    icon: HelpCircle,
    label: 'Ayuda y FAQs',
    description: 'Preguntas frecuentes y soporte',
    href: '/ayuda',
  },
  {
    icon: LogIn,
    label: 'Intranet Docentes',
    description: 'Acceso para personal académico',
    href: 'https://intranet.uas.edu.mx',
    external: true,
  },
]

export default function QuickAccess() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Acceso Rápido</h2>
          <p className="text-lg text-gray-600">
            Encuentra lo que necesitas en un solo clic
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = link.icon
            const commonClasses =
              'group rounded-lg border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all'

            const content = (
              <>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary-50 p-3 group-hover:bg-primary-100 transition-colors">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{link.label}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                </div>
              </>
            )

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commonClasses}
                >
                  {content}
                </a>
              )
            }

            return (
              <Link key={link.label} href={link.href} className={commonClasses}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
