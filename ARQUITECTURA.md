# 📋 ARQUITECTURA PROFESIONAL - FIMAZ

## Visión General

Sitio web profesional e institucional para la Facultad de Informática Mazatlán diseñado con estándares de seguridad, performance y cumplimiento legal de nivel empresarial.

---

## 🔒 SEGURIDAD IMPLEMENTADA

### Protecciones Técnicas

- **HTTPS Obligatorio** - Encriptación de extremo a extremo
- **Sanitización de Entrada** - Prevención de XSS (salida escapada en React/JSX)
- **Validación en Cliente y Servidor** - Doble validación de datos
- **CSRF Protection** - Tokens CSRF en formularios importantes
- **Content Security Policy (CSP)** - Headers de seguridad en layout.tsx
- **Rate Limiting** - Función para prevenir abuso de API
- **Sanitización de Archivos** - Validación de nombre y tipo de archivo

### Prácticas de Seguridad

```typescript
// Sanitizar entrada de usuario
sanitizeInput("texto <script>alert('xss')</script>") 
// Retorna: "texto alertxss"

// Validar email
isValidEmail("usuario@fimaz.edu.mx") // true

// Validar teléfono mexicano
isValidMexicanPhone("+52 (669) 981 1560") // true
```

---

## 📋 CUMPLIMIENTO LEGAL

### Páginas Implementadas

1. **Aviso de Privacidad** (`/legal/privacidad`)
   - Datos recopilados
   - Finalidades del uso
   - Base legal
   - Retención de datos
   - Derechos del usuario

2. **Política de Cookies** (`/legal/cookies`)
   - Tipos de cookies (esenciales, análisis, funcionalidad, marketing)
   - Tabla detallada de cookies específicas
   - Cómo gestionar cookies
   - Banner de consentimiento automático

3. **Términos y Condiciones** (`/legal/terminos`)
   - Licencia de uso
   - Prohibiciones
   - Responsabilidad limitada
   - Indemnización
   - Ley aplicable (Sinaloa, México)

### Banner de Cookies

Implementado automáticamente en `layout.tsx`:
```javascript
// Se muestra al primer acceso
// Usuario puede: Aceptar todas, Rechazar, Personalizar
// Cookie se almacena por 1 año (31536000 segundos)
```

---

## 🎯 ESTRUCTURA ESTRATÉGICA DEL SITIO

### Menú Principal (7 secciones máximo - UX best practice)

1. **Inicio** - Home con propuesta de valor
2. **Facultad** - Información institucional
3. **Programas** - Oferta académica
4. **Planes de Estudio** - Detalles curriculares
5. **Docentes** - Credenciales y especialidades
6. **Investigación** - Proyectos y vinculación
7. **Bolsa de Trabajo** - Vinculación empresarial
8. **Admisiones** - Proceso de inscripción
9. **Noticias** - Eventos y actualizaciones
10. **Contacto** - Formulario seguro

### Secciones Legales (Footer)
- Privacidad
- Cookies
- Términos

---

## 🔄 SEO OPTIMIZADO

### Meta Tags Globales

```typescript
// Automático en layout.tsx
- title (variable por página)
- description
- keywords
- robots: "index, follow"
- viewport: "width=device-width, initial-scale=1"
- Open Graph (Facebook, LinkedIn)
- Twitter Card
- Alternate hreflang para idiomas
```

### Schema.org JSON-LD

```json
// Organización
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Facultad de Informática Mazatlán",
  "contactPoint": { ... },
  "address": { ... }
}

// Programa Educativo
{
  "@type": "EducationalOccupationalProgram",
  "name": "Licenciatura en Informática",
  "duration": "PT4A"
}
```

### Archivos Configurados

- **sitemap.xml** - Mejor indexación en búsqueda
- **robots.txt** - Control de rastreo
- **manifest.json** - App web progresiva (PWA)

---

## ⚡ PERFORMANCE

### Optimizaciones Implementadas

1. **Next.js 14**
   - Server-side rendering (SSR)
   - Static generation (SSG)
   - Image optimization automática
   - Code splitting por ruta

2. **Lazy Loading**
   - Imágenes cargadas bajo demanda
   - Componentes code-split

3. **CSS Optimizado**
   - Tailwind CSS (solo código usado)
   - Postcss + Autoprefixer

4. **Preconnect Headers**
   - Conexiones preestablecidas a CDNs
   - Reduce latencia

### Objetivo: < 3 segundos de carga

---

## 📚 VALIDACIÓN DE DATOS

### Funciones Implementadas

```typescript
// Contacto
validateContactForm({
  nombre: string,
  email: string,
  telefono?: string,
  asunto: string,
  mensaje: string
})

// Admisiones
validateAdmissionsForm({
  nombreCompleto: string,
  email: string,
  telefono: string,
  curp?: string,
  programaIntereses: string,
  escuelaProcedencia: string
})

// Contraseña (para futuro panel)
validatePassword(password) 
// Retorna: { isValid, strength, errors }

// Validar archivo
validateFileSize(bytes, maxMB)
validateFileType(mimeType, allowedTypes)
sanitizeFileName(fileName)
```

---

## 📊 COMPONENTES Y ARCHIVOS

### `/lib/`

- **security.ts** - Funciones de securidad
- **validation.ts** - Validadores de formularios
- **constants.ts** - Configuración global, programas, empresas
- **seo.ts** - Metadatos y schemas

### `/components/forms/`

- **ContactForm.tsx** - Formulario de contacto con validación

### `/app/legal/`

- **privacidad/page.tsx** - Aviso de privacidad
- **cookies/page.tsx** - Política de cookies
- **terminos/page.tsx** - Términos y condiciones

### `/public/`

- **robots.txt** - Control de rastreo
- **sitemap.xml** - Mapa del sitio

---

## 🎨 DISEÑO UX/UI

### Principios Implementados

✅ Mobile-first
✅ Navegación simple y clara
✅ Máximo 7 secciones principales
✅ Colores institucionales (azul/gris)
✅ Tipografía legible
✅ Contraste WCAG AAA
✅ Iconos de Lucide React

---

## 🚀 SIGUIENTES PASOS

### Fase 2

- [ ] Crear página de Inicio mejorada con CTA y testimonios
- [ ] Secciones académicas (Programas, Planes, Docentes)
- [ ] Panel de Admisiones
- [ ] Blog/Noticias
- [ ] Galería de Laboratorios

### Fase 3

- [ ] API Backend para formularios
- [ ] Sistema de gestión de contenidos
- [ ] Dashboard para administradores
- [ ] Sistema de emails
- [ ] Analytics avanzado

### Fase 4

- [ ] Certificado SSL/TLS personalizado
- [ ] CDN para imágenes
- [ ] Backup automatizado
- [ ] Monitoreo 24/7
- [ ] Pruebas de penetración

---

## 📈 MÉTRICAS Y MONITOREO

### Web Vitals a Monitorear

- **LCP (Largest Contentful Paint)** < 2.5s
- **FID (First Input Delay)** < 100ms
- **CLS (Cumulative Layout Shift)** < 0.1

### Herramientas Recomendadas

- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Lighthouse CI
- Sentry (error tracking)

---

## 📝 CHANGELOG

### v1.0.0 - Arquitectura Base
- ✅ Seguridad implementada
- ✅ Cumplimiento legal
- ✅ SEO base
- ✅ Formularios validados
- ✅ Estructura modular

---

## 📞 Contacto Técnico

Para consultas sobre la arquitectura:
- **Email:** tech@fimaz.edu.mx
- **Teléfono:** +52 (669) 981 1560

---

**Última actualización:** 28 de febrero de 2026
**Versión:** 1.0.0
**Estado:** ✅ Fase 1 Completa
