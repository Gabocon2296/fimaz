/**
 * VALIDACIÓN DE DATOS
 * Validadores para formularios y datos de entrada
 */

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

/**
 * Validar formulario de contacto
 */
export function validateContactForm(data: {
  nombre?: string
  email?: string
  telefono?: string
  asunto?: string
  mensaje?: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  // Nombre
  if (!data.nombre || data.nombre.trim().length < 3) {
    errors.nombre = 'El nombre debe tener al menos 3 caracteres'
  }
  if (data.nombre && data.nombre.length > 100) {
    errors.nombre = 'El nombre no puede exceder 100 caracteres'
  }

  // Email
  if (!data.email) {
    errors.email = 'El correo es requerido'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un correo válido'
  }

  // Teléfono (opcional pero si se proporciona debe ser válido)
  if (data.telefono && !/^(\+52|52|0)?[1-9]\d{9}$/.test(data.telefono.replace(/\D/g, ''))) {
    errors.telefono = 'Ingresa un número telefónico válido'
  }

  // Asunto
  if (!data.asunto || data.asunto.trim().length < 5) {
    errors.asunto = 'El asunto debe tener al menos 5 caracteres'
  }
  if (data.asunto && data.asunto.length > 200) {
    errors.asunto = 'El asunto no puede exceder 200 caracteres'
  }

  // Mensaje
  if (!data.mensaje || data.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  }
  if (data.mensaje && data.mensaje.length > 5000) {
    errors.mensaje = 'El mensaje no puede exceder 5000 caracteres'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validar formulario de admisiones
 */
export function validateAdmissionsForm(data: {
  nombreCompleto?: string
  email?: string
  telefono?: string
  curp?: string
  programaIntereses?: string
  escuelaProcedencia?: string
}): ValidationResult {
  const errors: Record<string, string> = {}

  // Nombre
  if (!data.nombreCompleto || data.nombreCompleto.trim().length < 5) {
    errors.nombreCompleto = 'Ingresa tu nombre completo'
  }

  // Email
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Ingresa un correo válido'
  }

  // Teléfono
  if (!data.telefono || !/^(\+52|52|0)?[1-9]\d{9}$/.test(data.telefono.replace(/\D/g, ''))) {
    errors.telefono = 'Ingresa un teléfono válido'
  }

  // CURP (18 caracteres)
  if (data.curp && !/^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/.test(data.curp)) {
    errors.curp = 'CURP inválido'
  }

  // Programa de interés
  if (!data.programaIntereses || data.programaIntereses.trim().length === 0) {
    errors.programaIntereses = 'Selecciona un programa de interés'
  }

  // Escuela de procedencia
  if (!data.escuelaProcedencia || data.escuelaProcedencia.trim().length < 3) {
    errors.escuelaProcedencia = 'Ingresa tu escuela de procedencia'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

/**
 * Validar contraseña
 */
export function validatePassword(password: string): {
  isValid: boolean
  strength: 'debil' | 'media' | 'fuerte'
  errors: string[]
} {
  const errors: string[] = []
  let strength: 'debil' | 'media' | 'fuerte' = 'debil'

  if (password.length < 8) {
    errors.push('Mínimo 8 caracteres')
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Incluye letras mayúsculas')
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Incluye letras minúsculas')
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Incluye números')
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Incluye caracteres especiales (!@#$%^&*)')
  }

  if (errors.length === 0) {
    strength = 'fuerte'
  } else if (errors.length <= 2) {
    strength = 'media'
  }

  return {
    isValid: errors.length === 0,
    strength,
    errors,
  }
}

/**
 * Sanitizar nombre de archivo
 */
export function sanitizeFileName(fileName: string): string {
  return fileName
    .toLowerCase()
    .replace(/[^a-z0-9.-]/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 255)
}

/**
 * Validar tamaño de archivo
 */
export function validateFileSize(bytes: number, maxMB: number = 10): boolean {
  return bytes <= maxMB * 1024 * 1024
}

/**
 * Validar tipo de archivo permitido
 */
export function validateFileType(mimeType: string, allowedTypes: string[]): boolean {
  return allowedTypes.includes(mimeType)
}
