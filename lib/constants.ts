/**
 * CONSTANTES Y CONFIGURACIÓN GLOBAL
 */

// Información General
export const SITE_CONFIG = {
  name: 'FIMAZ',
  fullName: 'Facultad de Informática Mazatlán',
  university: 'Universidad Autónoma de Sinaloa',
  description: 'Portal académico oficial de la Facultad de Informática Mazatlán',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fimaz.uas.edu.mx',
  logo: '/images/fimaz-logo.svg',
  favicon: '/favicon.ico',
}

// Contacto
export const CONTACT_INFO = {
  phone: '+52 (669) 981 1560',
  email: 'info@fimaz.edu.mx',
  address: 'Av. Universidad y Leonismo Internacional, C.P. 82017, Mazatlán, Sinaloa, México',
  coordinates: {
    latitude: 23.1932,
    longitude: -106.4104,
  },
  hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
}

// Redes Sociales
export const SOCIAL_MEDIA = {
  facebook: 'https://facebook.com/fimaz',
  twitter: 'https://twitter.com/fimaz',
  instagram: 'https://instagram.com/fimaz',
  linkedin: 'https://linkedin.com/company/fimaz',
  youtube: 'https://youtube.com/fimaz',
}

// Programas Académicos
export const ACADEMIC_PROGRAMS = [
  {
    id: 'li-2023',
    name: 'Licenciatura en Informática (2023)',
    level: 'Licenciatura',
    modality: 'Presencial',
    duration: '4 años',
    credits: 252,
    description: 'Programa actualizado con las tecnologías más recientes en desarrollo de software, bases de datos e infraestructura.',
    slug: 'licenciatura-informatica-2023',
  },
  {
    id: 'lisi',
    name: 'Licenciatura en Ingeniería en Sistemas de Información',
    level: 'Licenciatura',
    modality: 'Presencial',
    duration: '4 años',
    credits: 260,
    description: 'Formación integral en sistemas de información empresariales, análisis y soluciones digitales.',
    slug: 'lisi',
  },
  {
    id: 'lisimv',
    name: 'Licenciatura en Ingeniería en Sistemas Modalidad Virtual',
    level: 'Licenciatura',
    modality: 'Virtual',
    duration: '4 años',
    credits: 260,
    description: 'Educación flexible y de calidad para profesionales en activo.',
    slug: 'lisimv',
  },
]

// Programas de Investigación
export const RESEARCH_PROGRAMS = [
  {
    id: 'ia-ml',
    name: 'Inteligencia Artificial y Machine Learning',
    leader: 'Dr. Investigador 1',
    description: 'Investigación en algoritmos de IA y aplicaciones de machine learning',
  },
  {
    id: 'cybersecurity',
    name: 'Ciberseguridad',
    leader: 'Dra. Investigadora 2',
    description: 'Seguridad en sistemas de información y protección de datos',
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing y DevOps',
    leader: 'Ing. Investigador 3',
    description: 'Infraestructura en la nube y prácticas de desarrollo ágil',
  },
]

// Empresas Vinculadas
export const PARTNER_COMPANIES = [
  {
    name: 'Empresa Tecnológica 1',
    logo: '/images/companies/company1.svg',
  },
  {
    name: 'Empresa Tecnológica 2',
    logo: '/images/companies/company2.svg',
  },
  {
    name: 'Empresa Tecnológica 3',
    logo: '/images/companies/company3.svg',
  },
]

// Características del Programa
export const PROGRAM_FEATURES = [
  {
    icon: 'Zap',
    title: 'Currículo Actualizado',
    description: 'Alineado con estándares internacionales e industria 4.0',
  },
  {
    icon: 'Users',
    title: 'Docentes Especializados',
    description: 'Profesores con experiencia industrial real',
  },
  {
    icon: 'Database',
    title: 'Infraestructura Moderna',
    description: 'Laboratorios equipados con tecnología de punta',
  },
  {
    icon: 'TrendingUp',
    title: 'Bolsa de Trabajo',
    description: 'Conexión directa con empresas demandantes',
  },
  {
    icon: 'BookOpen',
    title: 'Certificaciones',
    description: 'Oportunidades de certificación profesional internacional',
  },
  {
    icon: 'Globe',
    title: 'Movilidad Internacional',
    description: 'Convenios de intercambio académico',
  },
]

// Testimonios de Estudiantes
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Juan García López',
    program: 'Licenciatura en Informática (2023)',
    text: 'La calidad educativa en FIMAZ me permitió conseguir un trabajo como desarrollador senior en una empresa multinacional.',
    image: '/images/testimonials/student1.jpg',
  },
  {
    id: 2,
    name: 'María Rodríguez Chen',
    program: 'Licenciatura LISI',
    text: 'Los proyectos reales que desarrollamos durante la carrera fueron fundamentales para mi desempeño laboral actual.',
    image: '/images/testimonials/student2.jpg',
  },
  {
    id: 3,
    name: 'Carlos Moreno Jiménez',
    program: 'LISI Modalidad Virtual',
    text: 'Estudiar de forma virtual sin comprometer calidad fue la mejor decisión para equilibrar trabajo y educación.',
    image: '/images/testimonials/student3.jpg',
  },
]

// Menú Principal
export const MAIN_MENU = [
  { label: 'Inicio', href: '/' },
  { label: 'Facultad', href: '/facultad' },
  { label: 'Programas', href: '/programas' },
  { label: 'Planes de Estudio', href: '/planes-estudio' },
  { label: 'Docentes', href: '/docentes' },
  { label: 'Investigación', href: '/investigacion' },
  { label: 'Bolsa de Trabajo', href: '/vinculacion' },
  { label: 'Admisiones', href: '/admisiones' },
  { label: 'Noticias', href: '/noticias' },
  { label: 'Contacto', href: '/contacto' },
]

// Información Legal
export const LEGAL_PAGES = [
  { label: 'Aviso de Privacidad', href: '/privacidad' },
  { label: 'Política de Cookies', href: '/cookies' },
  { label: 'Términos y Condiciones', href: '/terminos' },
]
