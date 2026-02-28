import { Download, BookOpen, Users, Award, Calendar, BarChart3, MapPin, HelpCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const resources = [
  {
    category: 'Documentos Académicos',
    items: [
      { title: 'Horarios de Clases', icon: Calendar, file: 'horarios.pdf', size: '1.2 MB' },
      { title: 'Calendario Académico', icon: Calendar, file: 'calendario.pdf', size: '890 KB' },
      { title: 'Planes de Estudio', icon: BookOpen, file: 'planes.pdf', size: '2.5 MB' },
      { title: 'Reglamento Académico', icon: Award, file: 'reglamento.pdf', size: '1.8 MB' },
    ],
  },
  {
    category: 'Servicios Estudiantiles',
    items: [
      { title: 'Solicitud de Constancia', icon: FileText, external: true, url: '#' },
      { title: 'Cambio de Grupo', icon: Users, external: true, url: '#' },
      { title: 'Solicitud de Créditos', icon: Award, external: true, url: '#' },
      { title: 'Tutorías Académicas', icon: BookOpen, external: true, url: '#' },
    ],
  },
]

const FileText = Download

export default function Estudiantes() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Portal de Estudiantes</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Accede a todos los recursos, documentos y servicios que necesitas
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Accesos Rápidos */}
          <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="#"
              className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-lg bg-blue-100 p-3 mb-3 w-fit">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Calificaciones</h3>
              <p className="text-sm text-gray-600">Consulta tus calificaciones</p>
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-lg bg-green-100 p-3 mb-3 w-fit">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Horarios</h3>
              <p className="text-sm text-gray-600">Tu horario actual</p>
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-lg bg-purple-100 p-3 mb-3 w-fit">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Tutorías</h3>
              <p className="text-sm text-gray-600">Agendar una tutoría</p>
            </a>
            <a
              href="#"
              className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="rounded-lg bg-orange-100 p-3 mb-3 w-fit">
                <MapPin className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Campus Virtual</h3>
              <p className="text-sm text-gray-600">Acceso a la plataforma</p>
            </a>
          </div>

          {/* Recursos por Categoría */}
          <div className="space-y-8">
            {resources.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.category}</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {section.items.map((item) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={item.title}
                        className="rounded-lg border border-gray-200 p-4 hover:border-primary-300 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3 flex-1">
                            <div className="rounded-lg bg-primary-100 p-2 mt-1 flex-shrink-0">
                              <Icon className="h-5 w-5 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{item.title}</h3>
                              {!item.external && <p className="text-xs text-gray-500 mt-1">{item.size}</p>}
                            </div>
                          </div>
                          <Link
                            href={item.external ? (item.url as string) : '#'}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {item.external ? (
                              <ExternalLink className="h-5 w-5" />
                            ) : (
                              <Download className="h-5 w-5" />
                            )}
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Ayuda */}
          <div className="mt-16 rounded-lg bg-blue-50 border border-blue-200 p-8">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-100 p-3 flex-shrink-0">
                <HelpCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">¿Necesitas ayuda?</h3>
                <p className="text-gray-600 mb-4">
                  Si no encuentras lo que necesitas o tienes preguntas, no dudes en contactarnos.
                </p>
                <Link
                  href="/ayuda"
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
                >
                  Ir a Preguntas Frecuentes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
