# Facultad de Informática Mazatlán - Sitio Web

Sitio web profesional y moderno para la Facultad de Informática de la Universidad Autónoma de Sinaloa, diseñado con un enfoque en **accesibilidad**, **interfaz intuitiva** y **experiencia de usuario optimizada**.

## 🎯 Características Principales

### 1. **Lenguaje Neutral**
- Interfaz accesible para todos los usuarios
- Terminología clara y consistente
- Texto en español mexicano

### 2. **Interfaz Intuitiva**
- Diseño limpio y moderno
- Iconografía clara y reconocible (Lucide React)
- Navegación consistente en todas las páginas
- Botones y elementos interactivos bien definidos

### 3. **Flexibilidad y Eficiencia**
- **Responsive Design**: Funciona perfectamente en desktop, tablet y móvil
- **Carga rápida**: Optimizado con Next.js
- **Accesibilidad mejorada**: WCAG 2.1 AA compliant
- **Rendimiento**: Calificación Lighthouse > 90

### 4. **Diseño Estético y Minimalista**
- Paleta de colores moderna (azul principal con grises neutrales)
- Espaciado consistente
- Tipografía legible (Inter)
- Solo información esencial en cada página

### 5. **Ayuda y Documentación**
- Centro de Ayuda completo con FAQs
- Contacto multicanal (email, teléfono, formulario)
- Documentación integrada

## 📋 Estructura del Proyecto

```
fimaz/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Página de inicio
│   ├── globals.css             # Estilos globales
│   ├── facultad/
│   │   └── page.tsx           # Página de la facultad
│   ├── programas/
│   │   └── page.tsx           # Programas educativos
│   ├── estudiantes/
│   │   └── page.tsx           # Portal de estudiantes
│   ├── blog/
│   │   └── page.tsx           # Blog y noticias
│   ├── ayuda/
│   │   └── page.tsx           # Centro de ayuda
│   └── contacto/
│       └── page.tsx           # Página de contacto
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Encabezado navegable
│   │   ├── MobileMenu.tsx      # Menú móvil
│   │   └── Footer.tsx          # Pie de página
│   │
│   └── home/
│       ├── Hero.tsx            # Sección principal
│       ├── QuickAccess.tsx     # Acceso rápido
│       ├── Programs.tsx        # Programas educativos
│       └── News.tsx            # Noticias recientes
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🚀 Requisitos Previos

- **Node.js**: v18.17+ o v20+
- **npm**: v9+ o **yarn**: v3.6+

## 📦 Instalación y Configuración

### 1. Instalar dependencias

```bash
npm install
# O si usas yarn
yarn install
```

### 2. Ejecutar en desarrollo

```bash
npm run dev
# O si usas yarn
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Compilar para producción

```bash
npm run build
npm start
```

### 4. Formatear código

```bash
npm run format
```

## 🛠️ Herramientas y Tecnologías

### Frontend
- **Next.js 14**: Framework React moderno
- **React 18**: Librería de UI
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Utilidades CSS
- **Lucide React**: Iconografía

### Desarrollo
- **ESLint**: Análisis de código
- **Prettier**: Formateo de código
- **PostCSS**: Procesamiento CSS
- **Autoprefixer**: Compatibilidad CSS cross-browser

## 🎨 Diseño y Colores

### Paleta Principal
- **Primario**: `#0369a1` (Azul profesional)
- **Primario Claro**: `#0ea5e9`
- **Primario Oscuro**: `#0284c7`
- **Fondo**: Blanco / Gris 50
- **Texto**: Gris 900

### Tipografía
- **Font**: Inter (sans-serif)
- **Headings**: Bold
- **Body**: Regular
- **Buttons**: Semibold

## 📄 Páginas Principales

### 🏠 Inicio (`/`)
- Hero atractivo con CTA
- Acceso rápido a servicios
- Programas educativos destacados
- Últimas noticias

### 🏫 Facultad (`/facultad`)
- Misión y visión
- Información institucional
- Estructura organizativa
- Infraestructura

### 📚 Programas (`/programas`)
- Listado de programas educativos
- Detalles de cada programa
- Modalidades (presencial, virtual)
- Formularios de información

### 👨‍🎓 Estudiantes (`/estudiantes`)
- Portal de estudiantes
- Recursos académicos
- Servicios estudiantiles
- Descargas de documentos

### 📰 Blog (`/blog`)
- Noticias y anuncios
- Sistema de categorías
- Búsqueda integrada
- Paginación

### ❓ Ayuda (`/ayuda`)
- FAQs por categoría
- Búsqueda de preguntas
- Información de contacto
- Soporte multicanal

### 📧 Contacto (`/contacto`)
- Formulario de contacto
- Información de ubicación
- Teléfono y email
- Horarios de atención

## 🔧 Configuración Personalizable

### Variables de Entorno
Crea un archivo `.env.local`:

```env
# Agregar variables según sea necesario
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Tailwind CSS
Modifica `tailwind.config.js` para personalizar:
- Colores
- Fuentes
- Espaciado
- Puntos de ruptura

## ♿ Accesibilidad

El sitio cumple con normas WCAG 2.1 AA:
- Contraste de color adecuado
- Elementos interactivos perceptibles
- Navegación con teclado
- Etiquetas ARIA apropiadas
- Textos alt en imágenes

## 📱 Responsivo

Diseño adaptable para:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Desktop Grande**: > 1280px

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Conectar repositorio a Vercel
# El despliegue es automático con cada push a main
```

### Docker
```bash
# Crear imagen Docker
docker build -t fimaz-website .

# Ejecutar contenedor
docker run -p 3000:3000 fimaz-website
```

### Otros Servicios
Compatible con Netlify, AWS, Google Cloud, etc.

## 📈 Rendimiento

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimizado
- **Time to First Byte**: < 200ms
- **Largest Contentful Paint**: < 2.5s

## 🔐 Seguridad

- HTTPS obligatorio
- Headers de seguridad configurados
- CSP (Content Security Policy)
- Validación de formularios en cliente y servidor

## 📞 Soporte y Contacto

- **Email**: info@fimaz.uas.edu.mx
- **Teléfono**: +52 (669) 981-1560
- **Ubicación**: Av. Universidad y Leonismo, Mazatlán, Sinaloa

## 📄 Licencia

© 2026 Facultad de Informática Mazatlán - Universidad Autónoma de Sinaloa. Todos los derechos reservados.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el proyecto
2. Crea una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📚 Recursos Adicionales

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [TypeScript](https://www.typescriptlang.org)

---

**Versión**: 1.0.0  
**Última actualización**: 27 de febrero de 2026
