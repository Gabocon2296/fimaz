import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { PRIVACY_SEO } from '@/lib/seo'

export const metadata = {
  title: PRIVACY_SEO.title,
  description: PRIVACY_SEO.description,
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Inicio
            </Link>
            <ChevronRight className="h-4 w-4 mx-3 text-gray-400" />
            <span className="text-gray-600">Aviso de Privacidad</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Aviso de Privacidad</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Responsable de Datos Personales</h2>
            <p>
              La <strong>Facultad de Informática Mazatlán (FIMAZ)</strong> de la Universidad Autónoma de Sinaloa es responsable de la recopilación, uso y protección de tus datos personales.
            </p>
            <p>
              <strong>Contacto:</strong> info@fimaz.edu.mx | +52 (669) 981 1560
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos Personales que Recopilamos</h2>
            <p>Recopilamos los siguientes datos personales cuando utilizas nuestro sitio:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección</li>
              <li>Información educativa (solicitud de admisión)</li>
              <li>Información de uso del sitio (cookies, dirección IP, navegador)</li>
              <li>Datos de contacto en formularios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidades del Uso de Datos</h2>
            <p>Utilizamos tus datos personales para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Procesar solicitudes de admisión</li>
              <li>Responder a consultas y solicitudes de información</li>
              <li>Enviar información sobre programas académicos</li>
              <li>Mejorar la experiencia del usuario en el sitio web</li>
              <li>Realizar análisis estadísticos anónimos</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Comunicaciones académicas y administrativas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Base Legal</h2>
            <p>El procesamiento de tus datos se basa en:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tu consentimiento explícito</li>
              <li>La ejecución de un contrato (solicitud de admisión)</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Intereses legítimos de FIMAZ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seguridad de datos</h2>
            <p>
              Implementamos medidas técnicas y administrativas para proteger tus datos contra acceso no autorizado, pérdida o alteración:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encriptación HTTPS de toda la comunicación</li>
              <li>Almacenamiento seguro en servidores protegidos</li>
              <li>Restricción de acceso a personal autorizado</li>
              <li>Auditorías de seguridad periódicas</li>
              <li>Backups automatizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Compartir Datos con Terceros</h2>
            <p>
              No compartimos tus datos personales con terceras partes sin tu consentimiento, excepto:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proveedores de servicios bajo contrato (hosting, email)</li>
              <li>Autoridades legales cuando sea requerido por ley</li>
              <li>Otras dependencias de la UAS cuando sea necesario</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
            <p>
              Retenemos tus datos personales durante el tiempo necesario para cumplir con las finalidades descritas, y no más de lo requerido por la ley. En general:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Datos de contacto: 2 años después de la comunicación</li>
              <li>Solicitudes de admisión: 5 años</li>
              <li>Datos académicos: Según regulaciones de UAS</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de datos</li>
              <li>Solicitar la portabilidad de datos</li>
              <li>Oponerme al procesamiento de mis datos</li>
              <li>Retirar mi consentimiento</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctanos en: <strong>privacy@fimaz.edu.mx</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
              <Link href="/legal/cookies" className="text-blue-600 hover:underline">
                Política de Cookies
              </Link>{' '}
              para más información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios en este Aviso</h2>
            <p>
              Nos reservamos el derecho de modificar este aviso en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Última actualización:</strong> 28 de febrero de 2026
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Contacto para Privacidad</h2>
            <p>Si tienes preguntas sobre este aviso de privacidad, contáctanos:</p>
            <p className="mt-2">
              📧 <strong>privacy@fimaz.edu.mx</strong><br />
              📞 <strong>+52 (669) 981 1560</strong><br />
              📍 Av. Universidad y Leonismo Internacional, 82017, Mazatlán, Sinaloa
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
