import Link from 'next/link'
import { BookOpen, Users, FileText, Bell, HelpCircle, LogIn, GraduationCap, Mail } from 'lucide-react'

const portalLinks = [
  {
    icon: Users,
    label: 'Portal Alumnos',
    description: 'Calificaciones, horarios y recursos',
    href: '/estudiantes',
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-600',
  },
  {
    icon: LogIn,
    label: 'Portal Docentes',
    description: 'Intranet académica y administrativo',
    href: 'https://intranet.uas.edu.mx',
    external: true,
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-600',
  },
  {
    icon: GraduationCap,
    label: 'Programas Académicos',
    description: 'Licenciaturas y especialidades',
    href: '/programas',
    color: 'from-green-500 to-green-600',
    textColor: 'text-green-600',
  },
  {
    icon: FileText,
    label: 'Trámites y Documentos',
    description: 'Solicitudes, certificados y más',
    href: '/contacto',
    color: 'from-orange-500 to-orange-600',
    textColor: 'text-orange-600',
  },
  {
    icon: Bell,
    label: 'Noticias y Anuncios',
    description: 'Últimas actualidades de la facultad',
    href: '/blog',
    color: 'from-red-500 to-red-600',
    textColor: 'text-red-600',
  },
  {
    icon: HelpCircle,
    label: 'Ayuda y Contacto',
    description: 'Preguntas frecuentes y soporte',
    href: '/ayuda',
    color: 'from-indigo-500 to-indigo-600',
    textColor: 'text-indigo-600',
  },
]

export default function Portal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-20 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          FIMAZ
        </h1>
        <p className="text-xl text-slate-300 mb-2">
          Facultad de Informática Mazatlán
        </p>
        <p className="text-slate-400">
          Portal de Acceso Rápido
        </p>
      </div>

      {/* Portal Grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalLinks.map((link) => {
              const Icon = link.icon

              const content = (
                <div className={`bg-gradient-to-br ${link.color} rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 transform`}>
                  <div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-fit mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{link.label}</h3>
                    <p className="text-white/90">{link.description}</p>
                  </div>
                  <div className="mt-6 flex items-center text-white/70 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Acceder</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <Link key={link.label} href={link.href} className="group">
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="border-t border-slate-700 mt-12 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 mb-4">
            ¿Necesitas ayuda? 
            <Link href="/contacto" className="text-blue-400 hover:text-blue-300 ml-2">
              Contáctanos
            </Link>
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 Facultad de Informática Mazatlán. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
