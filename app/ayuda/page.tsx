'use client'

import { useState } from 'react'
import { ChevronDown, Search, Mail, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: 'Admisiones',
    questions: [
      {
        q: '¿Cuál es el proceso de admisión?',
        a: 'El proceso de admisión incluye: solicitud en línea, examen de admisión, entrevista personal y validación de documentos. Consulta los requisitos específicos en nuestra página de admisiones.',
      },
      {
        q: '¿Cuáles son los requisitos para aplicar?',
        a: 'Debes tener certificado de bachillerato, ser mayor de 18 años y cumplir con los requisitos académicos mínimos establecidos por la universidad.',
      },
      {
        q: '¿Cuál es el costo de las inscripciones?',
        a: 'Los costos varían según el programa educativo. Contacta a nuestro departamento de admisiones para obtener información actualizada sobre aranceles.',
      },
    ],
  },
  {
    category: 'Servicios Académicos',
    questions: [
      {
        q: '¿Cómo solicito una constancia?',
        a: 'Puedes solicitar constancias a través del portal de estudiantes o visitando las oficinas de registro. El trámite tiene un costo y tiempo de procesamiento de 5-7 días hábiles.',
      },
      {
        q: '¿Puedo cambiar de grupo?',
        a: 'Sí, puedes cambiar de grupo dentro de los primeros 10 días de clases. Completa el formulario en línea o visita el departamento de control académico.',
      },
      {
        q: '¿Dónde encuentro los horarios de clases?',
        a: 'Los horarios están disponibles en el portal de estudiantes, en la sección de documentos académicos, o en las carteleras de la facultad.',
      },
    ],
  },
  {
    category: 'Programas Educativos',
    questions: [
      {
        q: '¿Cuál es la duración de los programas?',
        a: 'Todos nuestros programas de licenciatura tienen duración de 8 semestres (4 años) en modalidad presencial, mientras que la virtual puede ser más flexible según tu ritmo.',
      },
      {
        q: '¿Los programas están acreditados?',
        a: 'Sí, todos nuestros programas cuentan con acreditación reconocida a nivel nacional e internacional, garantizando la calidad educativa.',
      },
      {
        q: '¿Hay oportunidades de intercambio estudiantil?',
        a: 'Sí, tenemos convenios con universidades nacionales e internacionales. Consulta con el departamento de vinculación para más información.',
      },
    ],
  },
  {
    category: 'Soporte Técnico',
    questions: [
      {
        q: '¿Cómo accedo al campus virtual?',
        a: 'Utiliza tu matrícula como usuario y tu contraseña. Si olvidaste tu contraseña, usa la opción "Recuperar contraseña" en el portal de inicio de sesión.',
      },
      {
        q: '¿Qué navegadores son compatibles?',
        a: 'Recomendamos usar Chrome, Firefox, Safari o Edge en sus versiones más recientes. Si tienes problemas, limpia el caché de tu navegador.',
      },
      {
        q: '¿Cómo reporto un problema técnico?',
        a: 'Contacta al departamento de TI a través del formulario en línea, por correo o llamando a la línea de soporte técnico.',
      },
    ],
  },
]

function FAQItem({
  question,
  answer,
}: {
  question: string
  answer: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-600 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Ayuda() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredFaqs = faqs.filter((section) =>
    !selectedCategory || section.category === selectedCategory
  )

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Centro de Ayuda</h1>
          <p className="text-lg text-gray-100">
            Encuentra respuestas a tus preguntas frecuentes
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Buscador */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Busca una pregunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
              />
            </div>
          </div>

          {/* Filtros de Categoría */}
          <div className="mb-12 flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                !selectedCategory
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              Todo
            </button>
            {faqs.map((section) => (
              <button
                key={section.category}
                onClick={() => setSelectedCategory(section.category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === section.category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {section.category}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-8 mb-16">
            {filteredFaqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.questions.map((item, idx) => (
                    <FAQItem
                      key={idx}
                      question={item.q}
                      answer={item.a}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contacto */}
          <div className="rounded-lg bg-white border-2 border-primary-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              ¿Aún tienes preguntas?
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <a
                href="mailto:info@fimaz.uas.edu.mx"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="rounded-lg bg-blue-100 p-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">info@fimaz.uas.edu.mx</p>
                </div>
              </a>
              <a
                href="tel:+52-669-981-1560"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="rounded-lg bg-green-100 p-3">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-sm text-gray-600">+52 (669) 981-1560</p>
                </div>
              </a>
              <Link
                href="/contacto"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="rounded-lg bg-purple-100 p-3">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Formulario</p>
                  <p className="text-sm text-gray-600">Contacta directamente</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
