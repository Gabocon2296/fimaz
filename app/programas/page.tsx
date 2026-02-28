import { BookOpen, Clock, Users, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const programs = [
  {
    id: 1,
    title: 'Licenciatura en Informática',
    subtitle: 'Plan 2023',
    description: 'Programa académico actualizado con los últimos estándares de la industria.',
    modality: 'Presencial',
    duration: '8 semestres',
    features: ['Desarrollo de Software', 'Bases de Datos', 'Sistemas Computacionales', 'Redes'],
  },
  {
    id: 2,
    title: 'Licenciatura en Ingeniería en Sistemas de Información',
    subtitle: 'Plan 2024',
    description: 'Formación integral en diseño e implementación de soluciones tecnológicas.',
    modality: 'Presencial',
    duration: '8 semestres',
    features: ['Análisis de Sistemas', 'Gestión de Proyectos', 'Seguridad Informática', 'Cloud Computing'],
  },
  {
    id: 3,
    title: 'Licenciatura en Ingeniería en Sistemas de Información',
    subtitle: 'Modalidad Virtual',
    description: 'Educación flexible y de calidad con horarios adaptables a tus necesidades.',
    modality: 'Virtual',
    duration: '8 semestres',
    features: ['Acceso en línea', 'Horarios Flexibles', 'Material Digitalizado', 'Apoyo Académico 24/7'],
  },
]

export default function Programas() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Programas Educativos</h1>
          <p className="text-lg text-gray-100 max-w-2xl">
            Elige el programa que se ajuste a tu perfil y metas profesionales
          </p>
        </div>
      </div>

      {/* Programas */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className={`rounded-lg p-8 border-2 hover:shadow-lg transition-all ${
                  idx === programs.length - 1
                    ? 'bg-white border-primary-300 bg-gradient-to-r from-white to-primary-50'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Información Principal */}
                  <div className="md:col-span-2">
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 mb-3">
                        {program.subtitle}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900">{program.title}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{program.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-5 w-5 text-primary-600" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-5 w-5 text-primary-600" />
                        <span>{program.modality}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary-600" />
                        Áreas de estudio
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Acciones */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors"
                    >
                      Más información
                    </Link>
                    <a
                      href="https://fimaz.uas.edu.mx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 px-6 py-3 font-semibold text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      Plan de estudios
                    </a>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center justify-center rounded-lg bg-gray-100 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200 transition-colors"
                    >
                      Solicitar información
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg bg-gradient-to-r from-primary-600 to-primary-900 p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿No sabes cuál es tu mejor opción?</h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de asesores está disponible para ayudarte a elegir el programa adecuado
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 font-semibold text-primary-700 hover:bg-gray-50 transition-colors"
            >
              Contactar a un asesor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
