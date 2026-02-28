import Link from 'next/link'
import { BookOpen, Users, FileText, Bell, HelpCircle, LogIn, GraduationCap, Mail, ArrowRight, Award, Globe, Users2 } from 'lucide-react'

const portalLinks = [
  {
    icon: Users,
    label: 'Portal Alumnos',
    description: 'Calificaciones, horarios y recursos',
    href: '/estudiantes',
    color: 'from-blue-500 to-blue-600',
    bgLight: 'bg-blue-50',
  },
  {
    icon: LogIn,
    label: 'Portal Docentes',
    description: 'Intranet académica y administrativo',
    href: 'https://intranet.uas.edu.mx',
    external: true,
    color: 'from-purple-500 to-purple-600',
    bgLight: 'bg-purple-50',
  },
  {
    icon: GraduationCap,
    label: 'Programas Académicos',
    description: 'Licenciaturas y especialidades',
    href: '/programas',
    color: 'from-green-500 to-green-600',
    bgLight: 'bg-green-50',
  },
  {
    icon: FileText,
    label: 'Trámites y Documentos',
    description: 'Solicitudes, certificados y más',
    href: '/contacto',
    color: 'from-orange-500 to-orange-600',
    bgLight: 'bg-orange-50',
  },
  {
    icon: Bell,
    label: 'Noticias y Anuncios',
    description: 'Últimas actualizaciones de la facultad',
    href: '/blog',
    color: 'from-red-500 to-red-600',
    bgLight: 'bg-red-50',
  },
  {
    icon: HelpCircle,
    label: 'Ayuda y Contacto',
    description: 'Preguntas frecuentes y soporte',
    href: '/ayuda',
    color: 'from-indigo-500 to-indigo-600',
    bgLight: 'bg-indigo-50',
  },
]

const facultyInfo = [
  {
    icon: Award,
    title: 'Excelencia Académica',
    description: 'Programas educativos de alta calidad reconocidos por UAS'
  },
  {
    icon: Users2,
    title: 'Comunidad Activa',
    description: 'Más de 2,000 estudiantes y docentes comprometidos'
  },
  {
    icon: Globe,
    title: 'Proyección Internacional',
    description: 'Convenios y colaboraciones a nivel global'
  },
]

export default function Portal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">FIMAZ</h1>
            <p className="text-2xl text-slate-300 mb-4">
              Facultad de Informática Mazatlán
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Portal de acceso rápido a todos nuestros servicios académicos y administrativos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/facultad" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Conoce la Facultad <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/programas" className="inline-flex items-center px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium">
                Programas Académicos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Portal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Acceso Rápido
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Encuentra y accede a los servicios más importantes en un solo clic
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalLinks.map((link) => {
            const Icon = link.icon

            const content = (
              <div className="h-full">
                <div className={`bg-gradient-to-br ${link.color} rounded-2xl p-8 h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform group`}>
                  <div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-fit mb-6 group-hover:bg-white/30 transition-colors">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{link.label}</h3>
                    <p className="text-white/90 text-sm">{link.description}</p>
                  </div>
                  <div className="mt-6 flex items-center text-white/70 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Acceder</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
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

      {/* Faculty Info Section */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            ¿Por qué elegir FIMAZ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facultyInfo.map((info, idx) => {
              const Icon = info.icon
              return (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Oferta Académica
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Programas educativos de calidad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Licenciatura en Informática (2023)',
              description: 'Programa actualizado con las tecnologías más recientes'
            },
            {
              title: 'Licenciatura en Ingeniería en Sistemas de Información',
              description: 'Formación integral en sistemas y soluciones empresariales'
            },
            {
              title: 'Licenciatura en Ingeniería en Sistemas Modalidad Virtual',
              description: 'Educación flexible para profesionales en activo'
            },
            {
              title: 'Especialidades y Diplomados',
              description: 'Cursos de actualización y especialización'
            },
          ].map((program, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all">
              <GraduationCap className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link href="/programas" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
                Ver más <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Tienes dudas?
          </h2>
          <p className="text-blue-100 mb-8">
            Nuestro equipo está aquí para ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
              Contáctanos <Mail className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/ayuda" className="inline-flex items-center px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold border-2 border-blue-400">
              Ver FAQs <HelpCircle className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">FIMAZ</h4>
              <p className="text-sm">Facultad de Informática Mazatlán</p>
              <p className="text-sm">Universidad Autónoma de Sinaloa</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/facultad" className="hover:text-white transition">Facultad</Link></li>
                <li><Link href="/programas" className="hover:text-white transition">Programas</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Noticias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contacto</h4>
              <p className="text-sm">+52 (669) 981 1560</p>
              <p className="text-sm">Av. Universidad y Leonismo Internacional</p>
              <p className="text-sm">82017 Mazatlán, Sinaloa</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
                <li><Link href="/ayuda" className="hover:text-white transition">Ayuda</Link></li>
                <li><a href="https://www.uas.edu.mx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">UAS</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© 2026 Facultad de Informática Mazatlán. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
