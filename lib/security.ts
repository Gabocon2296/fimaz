/**
 * UTILIDADES DE SEGURIDAD
 * Protección contra XSS, inyección SQL y ataques comunes
 */

/**
 * Sanitizar HTML para prevenir XSS
 */
export function sanitizeHTML(html: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return html.replace(/[&<>"']/g, (m) => map[m])
}

/**
 * Sanitizar entrada de usuario
 */
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>\"']/g, '')
    .substring(0, 1000) // Limitar longitud
}

/**
 * Validar URL para prevenir javascript: o data: URIs
 */
export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return ['http:', 'https:', 'mailto:'].includes(parsed.protocol)
  } catch {
    return false
  }
}

/**
 * Generar CSRF token (implementar con sesión)
 */
export function generateCSRFToken(): string {
  return Buffer.from(Math.random().toString()).toString('base64')
}

/**
 * Validar CSRF token
 */
export function validateCSRFToken(token: string, storedToken: string): boolean {
  return token === storedToken
}

/**
 * Hash para contraseñas (usar bcrypt en producción)
 */
export function hashPassword(password: string): string {
  // En producción, usar: import bcrypt from 'bcrypt'
  // return await bcrypt.hash(password, 10)
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  // Placeholder - usar bcrypt en servidor
  return Buffer.from(data).toString('base64')
}

/**
 * Rate limiting simple en cliente
 */
const rateLimitMap = new Map<string, number[]>()

export function checkRateLimit(identifier: string, maxRequests: number = 5, windowMs: number = 60000): boolean {
  const now = Date.now()
  const userRequests = rateLimitMap.get(identifier) || []
  
  // Filtrar solicitudes fuera de la ventana
  const recentRequests = userRequests.filter(time => now - time < windowMs)
  
  if (recentRequests.length >= maxRequests) {
    return false
  }
  
  recentRequests.push(now)
  rateLimitMap.set(identifier, recentRequests)
  return true
}

/**
 * Validar email de manera segura
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Validar teléfono mexicano
 */
export function isValidMexicanPhone(phone: string): boolean {
  const phoneRegex = /^(\+52|52|0)?[1-9]\d{9}$/
  return phoneRegex.test(phone.replace(/\D/g, ''))
}

/**
 * Generar nonce para scripts inline
 */
export function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15)
}
