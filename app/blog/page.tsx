import Link from 'next/link'
import { Calendar, ArrowRight, Search } from 'lucide-react'

const allNews = [
  {
    id: 1,
    title: 'Taller de Habilidades de Estudio para Estudiantes Virtuales',
    excerpt: 'Aprende técnicas efectivas de organización y estudio adaptadas a la modalidad virtual.',
    date: '2026-02-25',
    category: 'Eventos',
    content: 'Contenido completo del taller...',
  },
  {
    id: 2,
    title: 'Formularios Disponibles para el Ciclo 2026-1',
    excerpt: 'Accede a todos los formularios necesarios para el próximo ciclo académico.',
    date: '2026-02-20',
    category: 'Académico',
    content: 'Contenido completo sobre formularios...',
  },
  {
    id: 3,
    title: 'Conferencia: Tendencias en Desarrollo de Software',
    excerpt: 'Expertos de la industria compartirán las últimas tendencias en desarrollo de software.',
    date: '2026-02-15',
    category: 'Conferencia',
    content: 'Contenido completo de la conferencia...',
  },
  {
    id: 4,
    title: 'Nuevos Laboratorios de Computación Inaugurados',
    excerpt: 'Se inauguran oficialmente nuestros laboratorios equipados con tecnología de punta.',
    date: '2026-02-10',
    category: 'Infraestructura',
    content: 'Contenido sobre laboratorios...',
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
    Infraestructura: 'bg-orange-100 text-orange-700',
  }
  return colors[category] || 'bg-gray-100 text-gray-700'
}

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog y Noticias</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Mantente actualizado con las últimas noticias y eventos de la facultad
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Barra de búsqueda */}
          <div className="mb-12 flex gap-2 bg-white rounded-lg shadow-sm p-2">
            <input
              type="search"
              placeholder="Buscar noticias..."
              className="flex-1 px-4 py-2 outline-none text-gray-900"
            />
            <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded hover:bg-primary-700 transition-colors flex items-center gap-2">
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">Buscar</span>
            </button>
          </div>

          {/* Grid de Noticias */}
          <div className="space-y-6">
            {allNews.map((item) => (
              <Link
                key={item.id}
                href="#"
                className="group rounded-lg bg-white p-6 hover:shadow-lg transition-shadow border border-gray-200"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-2">
                      <span className={`inline-block rounded px-2 py-1 text-xs font-semibold ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {formatDate(item.date)}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="md:w-32 flex-shrink-0">
                    <div className="w-full h-32 md:h-24 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg flex items-center justify-center">
                      <div className="text-4xl">📰</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginación (simulada) */}
          <div className="mt-12 flex justify-center gap-2">
            <button disabled className="px-4 py-2 rounded border border-gray-300 text-gray-600 cursor-not-allowed">
              ← Anterior
            </button>
            <button className="px-4 py-2 rounded bg-primary-600 text-white font-medium hover:bg-primary-700">
              1
            </button>
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">
              2
            </button>
            <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100">
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
