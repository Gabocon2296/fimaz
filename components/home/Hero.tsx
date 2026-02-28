import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-primary-700 to-primary-900 py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute right-0 top-0 h-96 w-96" viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="300" stroke="currentColor" strokeWidth="1" className="text-white" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-block rounded-full bg-white bg-opacity-20 px-4 py-2">
            <span className="text-sm font-medium text-white">Bienvenido a Facultad de Informática Mazatlán</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Formando profesionales en tecnología
          </h1>

          <p className="mb-8 text-lg text-gray-100">
            Acceso intuitivo a programas educativos, recursos estudiantiles y servicios administrativos. 
            Todo en un solo lugar, diseñado para tu comodidad.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/programas"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary-700 hover:bg-gray-50 transition-colors"
            >
              Conocer programas
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
