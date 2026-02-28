import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { TERMS_SEO } from '@/lib/seo'

export const metadata = {
  title: TERMS_SEO.title,
  description: TERMS_SEO.description,
}

export default function TermsPage() {
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
            <span className="text-gray-600">Términos y Condiciones</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones de Uso</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
            <p>
              Al acceder y utilizar este sitio web (www.fimaz.uas.edu.mx), aceptas todos estos términos y condiciones. Si no estás de acuerdo, por favor no utilices este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Licencia de Uso</h2>
            <p>
              Se te concede una licencia limitada, no exclusiva y no transferible para acceder y usar este sitio web para fines personales y educativos. Está prohibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproducir, distribuir o transmitir contenido sin autorización</li>
              <li>Modificar, adaptar o traducir contenido del sitio</li>
              <li>Acceder a partes del sitio no autorizadas para ti</li>
              <li>Usar robots, spiders u otros automatismos</li>
              <li>Realizar ingeniería inversa o intentos de decodificación</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Contenido del Sitio</h2>
            <p>
              Todo el contenido del sitio (textos, imágenes, logos, videos, código) es propiedad intelectual de FIMAZ o sus proveedores. Los derechos de autor están protegidos.
            </p>
            <p>
              Puedes descargar y imprimir información del sitio exclusivamente para uso personal no comercial. Debe mantenerse intacta toda noticia de derechos de autor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Enlaces Externos</h2>
            <p>
              Este sitio puede contener enlaces a sitios web externos. FIMAZ no es responsable del contenido, precisión o prácticas de privacidad de sitios externos. El acceso a sitios externos está bajo tu propio riesgo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uso Prohibido</h2>
            <p>
              No puedes utilizar este sitio web de las siguientes formas:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enviar virus, malware o código dañino</li>
              <li>Realizar ataques de negación de servicio (DDoS)</li>
              <li>Acceso no autorizado a sistemas o datos</li>
              <li>Suplantación de identidad</li>
              <li>Acoso, intimidación u abuso de otros usuarios</li>
              <li>Publicar contenido ilegal, ofensivo o discriminatorio</li>
              <li>Cualquier actividad que viole leyes aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Formularios y Bases de Datos</h2>
            <p>
              Cuando completas formularios (contacto, admisiones), aceptas que:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>La información es precisa y completa</li>
              <li>Los datos se procesarán según nuestro Aviso de Privacidad</li>
              <li>FIMAZ puede contactarte usando la información proporcionada</li>
              <li>La información será protegida de manera segura</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Responsabilidad Limitada</h2>
            <p>
              Este sitio se proporciona "tal cual" sin garantías de ningún tipo. FIMAZ no garantiza:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disponibilidad continua del sitio</li>
              <li>Precisión de toda la información</li>
              <li>Que el sitio sea libre de errores o interrupciones</li>
              <li>Que defectos serán corregidos</li>
            </ul>
            <p className="mt-4">
              FIMAZ no será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o incapacidad de usar el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
            <p>
              La responsabilidad total de FIMAZ por cualquier reclamo no excederá $100 USD o el máximo permitido por ley.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnización</h2>
            <p>
              Aceptas indemnizar y eximir de responsabilidad a FIMAZ, sus funcionarios, empleados y agentes de cualquier reclamo, daño, pérdida o gasto (incluyendo honorarios legales) derivados de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tu uso del sitio</li>
              <li>Violación de estos términos</li>
              <li>Infracción de derechos de terceros</li>
              <li>Contenido que publiques o transites</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Modificación de Términos</h2>
            <p>
              FIMAZ puede modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor cuando se publiquen. Tu uso continuado del sitio constituyevolveres aceptación de términos modificados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Terminación de Acceso</h2>
            <p>
              FIMAZ puede terminar o suspender tu acceso al sitio inmediatamente, sin aviso previo, por violación de estos términos o por cualquier razón a su discreción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Ley Aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República Mexicana, específicamente las del estado de Sinaloa. Cualquier disputa se resolverá en tribunales competentes de Sinaloa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Separabilidad</h2>
            <p>
              Si alguna disposición de estos términos es encontrada inválida o no exigible, las disposiciones restantes permanecerán en vigor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Acuerdo Completo</h2>
            <p>
              Estos términos constituyen el acuerdo completo entre tú y FIMAZ respecto al uso del sitio web. Prevalecen sobre cualquier comunicación anterior.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Última actualización:</strong> 28 de febrero de 2026
            </p>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Preguntas sobre Términos</h2>
            <p>Si tienes preguntas sobre estos términos, contáctanos:</p>
            <p className="mt-2">
              📧 <strong>legal@fimaz.edu.mx</strong><br />
              📞 <strong>+52 (669) 981 1560</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
