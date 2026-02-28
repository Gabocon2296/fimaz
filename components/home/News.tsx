import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

const news = [
  {
    id: 1,
    title: 'Taller de Habilidades de Estudio para Estudiantes Virtuales',
    excerpt: 'Aprende técnicas efectivas de organización y estudio adaptadas a la modalidad virtual.',
    date: '2026-02-25',
    category: 'Eventos',
  },
  {
    id: 2,
    title: 'Formularios Disponibles para el Ciclo 2026-1',
    excerpt: 'Accede a todos los formularios necesarios para el próximo ciclo académico.',
    date: '2026-02-20',
    category: 'Académico',
  },
  {
    id: 3,
    title: 'Conferencia: Tendencias en Desarrollo de Software',
    excerpt: 'Expertos de la industria compartirán las últimas tendencias en desarrollo de software.',
    date: '2026-02-15',
    category: 'Conferencia',
  },
]

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Eventos: 'bg-blue-100 text-blue-700',
    Académico: 'bg-green-100 text-green-700',
    Conferencia: 'bg-purple-100 text-purple-700',
  }
  return colors[category] || 'bg-gray-100 text-gray-700'
}

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Últimas Noticias</h2>
            <p className="text-lg text-gray-600">
              Mantente informado sobre eventos y actualizaciones
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden text-primary-600 font-medium hover:text-primary-700 md:block"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {news.map((item) => (
            <Link
              key={item.id}
              href="/blog"
              className="group flex flex-col rounded-lg border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`inline-block rounded px-2 py-1 text-xs font-semibold ${getCategoryColor(
                    item.category,
                  )}`}
                >
                  {item.category}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>

              <p className="mb-4 flex-grow text-sm text-gray-600">{item.excerpt}</p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(item.date)}
                </div>
                <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            Ver todas las noticias
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
