'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-gray-100">
            Ponte en contacto con nosotros. Te responderemos en las próximas 24 horas
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Información de Contacto */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Información de Contacto</h2>

              <div className="space-y-6">
                {/* Dirección */}
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary-100 p-4 h-fit flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ubicación</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Av. Universidad y Leonismo Internacional<br />
                      C.P. 82017<br />
                      Mazatlán, Sinaloa<br />
                      México
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary-100 p-4 h-fit flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Teléfono</h3>
                    <a href="tel:+52-669-981-1560" className="text-primary-600 hover:text-primary-700 font-medium">
                      +52 (669) 981-1560
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Lunes a Viernes, 8:00-17:00 hrs</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary-100 p-4 h-fit flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <a href="mailto:info@fimaz.uas.edu.mx" className="text-primary-600 hover:text-primary-700 font-medium">
                      info@fimaz.uas.edu.mx
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Respuesta en 24 horas</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex gap-4">
                  <div className="rounded-lg bg-primary-100 p-4 h-fit flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Horario de Atención</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Lunes a Viernes:</strong> 8:00 - 17:00 hrs</p>
                      <p><strong>Sábado y Domingo:</strong> Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de Contacto */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envía tu Mensaje</h2>

                {submitted && (
                  <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">Mensaje enviado exitosamente</p>
                      <p className="text-sm text-green-700">Recibirás una respuesta pronto</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Teléfono (Opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                      placeholder="+52 (XXX) XXX-XXXX"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
                      Asunto
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none"
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="admisiones">Admisiones</option>
                      <option value="academico">Asuntos Académicos</option>
                      <option value="administrativo">Asuntos Administrativos</option>
                      <option value="tecnico">Soporte Técnico</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none resize-none"
                      placeholder="Por favor comparte tu consulta en detalle..."
                    />
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700 transition-colors"
                  >
                    <Send className="h-5 w-5" />
                    Enviar Mensaje
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    Respetamos tu privacidad. Nunca compartiremos tu información.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
