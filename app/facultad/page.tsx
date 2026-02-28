import { CheckCircle, Target, Eye, Users, Award, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: 'Misión',
    description: 'Formar profesionales en informática competentes, comprometidos con la innovación tecnológica y el desarrollo sostenible.',
  },
  {
    icon: Eye,
    title: 'Visión',
    description: 'Ser una facultad líder en educación tecnológica, generadora de conocimiento y soluciones innovadoras.',
  },
]

const highlights = [
  {
    icon: Users,
    label: 'Personal Académico',
    value: 'Docentes Especializados',
  },
  {
    icon: Award,
    label: 'Acreditación',
    value: 'Programas Acreditados',
  },
  {
    icon: Lightbulb,
    label: 'Investigación',
    value: 'Proyectos Activos',
  },
]

export default function Facultad() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Facultad de Informática Mazatlán</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Formando talento tecnológico desde hace más de una década
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Misión y Visión */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestra Identidad</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {values.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="rounded-lg bg-primary-100 p-3 flex-shrink-0">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Destacados */}
          <div className="mb-16 bg-gray-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nuestros Pilares</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-primary-100 p-4">
                        <Icon className="h-8 w-8 text-primary-600" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-sm text-gray-600">{item.value}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Información Adicional */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Información Institucional</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Organigrama
                </h3>
                <p className="text-gray-600 text-sm mb-3">Conoce la estructura administrativa y académica</p>
                <Link href="#" className="text-primary-600 font-medium text-sm hover:text-primary-700">Ver organigrama →</Link>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Normatividad
                </h3>
                <p className="text-gray-600 text-sm mb-3">Accede a reglamentos y normativas académicas</p>
                <Link href="#" className="text-primary-600 font-medium text-sm hover:text-primary-700">Ver normatividad →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
