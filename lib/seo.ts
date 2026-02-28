/**
 * CONFIGURACIÓN SEO
 * Meta tags, Open Graph, Schema.org, etc.
 */

import { SITE_CONFIG, CONTACT_INFO } from './constants'

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  author?: string
  publishedDate?: string
  modifiedDate?: string
}

/**
 * Generar meta tags para Head
 */
export function generateMetaTags(metadata: SEOMetadata) {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(', ') || '',
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url || SITE_CONFIG.url,
      type: metadata.type || 'website',
      images: [
        {
          url: metadata.image || `${SITE_CONFIG.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
      siteName: SITE_CONFIG.fullName,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      image: metadata.image || `${SITE_CONFIG.url}/og-image.jpg`,
    },
  }
}

/**
 * Schema.org JSON-LD para Organización
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: SITE_CONFIG.fullName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo}`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Student Services',
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address,
      addressCountry: 'MX',
    },
    sameAs: [
      'https://www.uas.edu.mx',
      'https://www.facebook.com/fimaz',
      'https://www.twitter.com/fimaz',
    ],
  }
}

/**
 * Schema.org JSON-LD para Programa Educativo
 */
export function getEducationalProgramSchema(program: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: program.name,
    description: program.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: SITE_CONFIG.fullName,
      url: SITE_CONFIG.url,
    },
    educationalLevel: program.level,
    duration: `PT${program.duration}`,
    numberOfCredits: program.credits,
  }
}

/**
 * Metadatos para página de inicio
 */
export const HOME_SEO: SEOMetadata = {
  title: 'FIMAZ - Facultad de Informática Mazatlán | UAS',
  description: 'Portal oficial de la Facultad de Informática Mazatlán. Licenciaturas en Informática, Ingeniería en Sistemas de Información y modalidad virtual.',
  keywords: ['informática', 'carrera', 'licenciatura', 'tecnología', 'Mazatlán', 'UAS'],
  url: SITE_CONFIG.url,
}

/**
 * Metadatos para página de programas
 */
export const PROGRAMS_SEO: SEOMetadata = {
  title: 'Programas Académicos | FIMAZ',
  description: 'Conoce nuestras licenciaturas en Informática e Ingeniería en Sistemas de Información con modalidad presencial y virtual.',
  keywords: ['programas académicos', 'licenciaturas', 'ingeniería informática', 'oferta educativa'],
  url: `${SITE_CONFIG.url}/programas`,
}

/**
 * Metadatos para página de admisiones
 */
export const ADMISSIONS_SEO: SEOMetadata = {
  title: 'Admisiones | FIMAZ',
  description: 'Proceso de admisión a las licenciaturas de FIMAZ. Requisitos, fechas y convocatoras.',
  keywords: ['admisiones', 'inscripción', 'registro', 'requisitos'],
  url: `${SITE_CONFIG.url}/admisiones`,
}

/**
 * Metadatos para página de contacto
 */
export const CONTACT_SEO: SEOMetadata = {
  title: 'Contacto | FIMAZ',
  description: 'Ponte en contacto con la Facultad de Informática Mazatlán. Teléfono, correo y ubicación.',
  keywords: ['contacto', 'ubicación', 'teléfono'],
  url: `${SITE_CONFIG.url}/contacto`,
}

/**
 * Metadatos para página de privacidad
 */
export const PRIVACY_SEO: SEOMetadata = {
  title: 'Aviso de Privacidad | FIMAZ',
  description: 'Política de privacidad y protección de datos de FIMAZ.',
  url: `${SITE_CONFIG.url}/privacidad`,
}

/**
 * Metadatos para página de cookies
 */
export const COOKIES_SEO: SEOMetadata = {
  title: 'Política de Cookies | FIMAZ',
  description: 'Política de uso de cookies del sitio web de FIMAZ.',
  url: `${SITE_CONFIG.url}/cookies`,
}

/**
 * Metadatos para página de términos
 */
export const TERMS_SEO: SEOMetadata = {
  title: 'Términos y Condiciones | FIMAZ',
  description: 'Términos y condiciones de uso del sitio web de FIMAZ.',
  url: `${SITE_CONFIG.url}/terminos`,
}

/**
 * Generar Breadcrumb Schema
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
