import Link from 'next/link'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-8">
          {/* Información de Contacto */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contacto</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>+52 (669) 981 1560</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fimaz.uas.edu.mx" className="hover:text-primary-600">
                  info@fimaz.uas.edu.mx
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <p>Av. Universidad y Leonismo Internacional, C.P. 82017, Mazatlán, Sinaloa</p>
              </div>
            </div>
          </div>

          {/* Horario */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Horario</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Lunes a Viernes</span>
              </div>
              <p className="ml-6">8:00 - 17:00 hrs</p>
              <p className="text-xs text-gray-500 ml-6">Horario de verano</p>
            </div>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/facultad" className="text-gray-600 hover:text-primary-600">Facultad</Link></li>
              <li><Link href="/programas" className="text-gray-600 hover:text-primary-600">Programas Educativos</Link></li>
              <li><Link href="/estudiantes" className="text-gray-600 hover:text-primary-600">Portal Estudiantes</Link></li>
              <li><Link href="/ayuda" className="text-gray-600 hover:text-primary-600">Ayuda y FAQs</Link></li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Síguenos</h3>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 mb-3">Mantente actualizado con nuestras actividades</p>
              <div className="flex gap-2">
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-primary-100 hover:text-primary-600" aria-label="Facebook">
                  f
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-primary-100 hover:text-primary-600" aria-label="Instagram">
                  📷
                </a>
                <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700 hover:bg-primary-100 hover:text-primary-600" aria-label="LinkedIn">
                  in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © {currentYear} Facultad de Informática Mazatlán - Universidad Autónoma de Sinaloa. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 justify-center mt-4 text-xs text-gray-500">
            <Link href="#" className="hover:text-primary-600">Privacidad</Link>
            <Link href="#" className="hover:text-primary-600">Términos de uso</Link>
            <Link href="#" className="hover:text-primary-600">Accesibilidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
