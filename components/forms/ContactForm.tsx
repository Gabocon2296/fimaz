'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { validateContactForm } from '@/lib/validation'
import { sanitizeInput } from '@/lib/security'
import { Mail, Phone, AlertCircle,CheckCircle } from 'lucide-react'

interface FormData {
  nombre: string
  email: string
  telefono: string
  asunto: string
  mensaje: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: sanitizeInput(value),
    }))
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Validar formulario
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      // Enviar datos al servidor (endpoint seguro)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCsrfToken(),
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar formulario')
      }

      setSubmitStatus('success')
      setSubmitMessage('¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.')
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      })
      setErrors({})

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">
          Nombre Completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.nombre ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
          aria-describedby={errors.nombre ? 'nombre-error' : undefined}
        />
        {errors.nombre && (
          <p id="nombre-error" className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.nombre}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Correo Electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@correo.com"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Teléfono (Opcional) */}
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-900 mb-2">
          Teléfono <span className="text-gray-500">(Opcional)</span>
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+52 (669) 123 4567"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.telefono ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          aria-describedby={errors.telefono ? 'telefono-error' : undefined}
        />
        {errors.telefono && (
          <p id="telefono-error" className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.telefono}
          </p>
        )}
      </div>

      {/* Asunto */}
      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-gray-900 mb-2">
          Asunto *
        </label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          placeholder="¿Sobre qué es tu consulta?"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.asunto ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          required
          aria-describedby={errors.asunto ? 'asunto-error' : undefined}
        />
        {errors.asunto && (
          <p id="asunto-error" className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.asunto}
          </p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-900 mb-2">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos más sobre tu consulta..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.mensaje ? 'border-red-500 bg-red-50' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical`}
          required
          aria-describedby={errors.mensaje ? 'mensaje-error' : undefined}
        />
        {errors.mensaje && (
          <p id="mensaje-error" className="mt-2 text-red-600 text-sm flex items-center gap-1">
            <AlertCircle className="h-4 w-4" />
            {errors.mensaje}
          </p>
        )}
      </div>

      {/* Estado de envío */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
          <p className="text-green-800">{submitMessage}</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800">{submitMessage}</p>
        </div>
      )}

      {/* Botón Enviar */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors duration-200"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {/* Nota de privacidad */}
      <p className="text-xs text-gray-600 text-center">
        Al enviar este formulario, aceptas nuestra{' '}
        <a href="/legal/privacidad" className="text-blue-600 hover:underline">
          Política de Privacidad
        </a>{' '}
        y{' '}
        <a href="/legal/terminos" className="text-blue-600 hover:underline">
          Términos de Uso
        </a>
      </p>
    </form>
  )
}

/**
 * Obtener CSRF token del DOM o generar uno
 */
function getCsrfToken(): string {
  const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
  return token || Math.random().toString(36).substring(2, 15)
}
