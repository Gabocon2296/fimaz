import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    id: 1,
    title: 'Licenciatura en Informática',
    year: '2023',
    description: 'Formación actualizada en desarrollo de software, bases de datos y sistemas computacionales.',
    icon: '💻',
  },
  {
    id: 2,
    title: 'Licenciatura en Ingeniería en Sistemas de Información',
    year: '2024',
    description: 'Enfoque en diseño e implementación de soluciones tecnológicas empresariales.',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Licenciatura en Ingeniería en Sistemas de Información',
    year: 'Modalidad Virtual',
    description: 'Acceso flexible a educación de calidad desde cualquier lugar.',
    icon: '🌐',
  },
]

export default function Programs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Programas Educativos</h2>
          <p className="text-lg text-gray-600">
            Elige la opción que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.id}
              href="/programas"
              className="group rounded-lg bg-white p-8 shadow hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <div className="text-4xl mb-3">{program.icon}</div>
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
                  {program.year}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{program.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{program.description}</p>
              <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                Más información
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/programas"
            className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white hover:bg-primary-700 transition-colors"
          >
            Ver todos los programas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
