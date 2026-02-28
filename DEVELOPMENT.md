# Guía de Desarrollo

## Estructura de Carpetas

```
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página de inicio
│   ├── globals.css              # Estilos globales
│   │
│   ├── facultad/                # Ruta /facultad
│   │   └── page.tsx
│   ├── programas/               # Ruta /programas
│   │   └── page.tsx
│   ├── estudiantes/             # Ruta /estudiantes
│   │   └── page.tsx
│   ├── blog/                    # Ruta /blog
│   │   └── page.tsx
│   ├── ayuda/                   # Ruta /ayuda
│   │   └── page.tsx
│   └── contacto/                # Ruta /contacto
│       └── page.tsx
│
├── components/                  # Componentes React reutilizables
│   ├── layout/                 # Componentes de diseño
│   │   ├── Header.tsx          # Navegación superior
│   │   ├── MobileMenu.tsx      # Menú móvil
│   │   └── Footer.tsx          # Pie de página
│   │
│   └── home/                   # Componentes de la página principal
│       ├── Hero.tsx            # Sección hero
│       ├── QuickAccess.tsx     # Acceso rápido
│       ├── Programs.tsx        # Programas educativos
│       └── News.tsx            # Noticias recientes
│
├── public/                      # Archivos estáticos
│   ├── favicon.ico
│   └── images/
│
└── Configuration Files
    ├── package.json             # Dependencias
    ├── tsconfig.json           # Configuración TypeScript
    ├── next.config.js          # Configuración Next.js
    ├── tailwind.config.js      # Configuración Tailwind
    ├── postcss.config.js       # Configuración PostCSS
    └── .gitignore              # Git ignorar
```

## Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (ej: `HeaderComponent.tsx`)
- **Archivos/carpetas**: kebab-case (ej: `quick-access.tsx`)
- **Variables/funciones**: camelCase (ej: `handleSubmit()`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `MAX_FILE_SIZE`)

### Estructura de Componentes

```tsx
'use client'  // Si necesita interactividad

import { useState } from 'react'
import Link from 'next/link'
import { Icon } from 'lucide-react'

interface ComponentProps {
  title: string
  description?: string
}

export default function MyComponent({ title, description }: ComponentProps) {
  const [state, setState] = useState('')

  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
```

### Estilos Tailwind
- Usar clases de utilidad de Tailwind
- Mantener consistencia con la paleta de colores definida
- Usar `responsive` classes: `md:`, `lg:`, `sm:`, etc.

### Ejemplo de clases comunes
```tsx
// Espaciado
<div className="p-4 m-2 space-y-4"></div>

// Colores
<button className="bg-primary-600 text-white hover:bg-primary-700"></button>

// Responsive
<div className="flex flex-col md:flex-row gap-4"></div>

// Sombras
<div className="shadow hover:shadow-lg transition-shadow"></div>
```

## Configuración de Git

```bash
# Inicializar repositorio (ya hecho)
git init

# Agregar cambios
git add .

# Commit
git commit -m "feat: descripción del cambio"

# Push
git push origin main
```

### Mensajes de Commit (Conventional Commits)
- `feat:` Nueva característica
- `fix:` Corrección de errores
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no de lógica)
- `refactor:` Refactorización
- `perf:` Mejoras de rendimiento
- `test:` Pruebas

## Proceso de Desarrollo

### 1. Agregar Nuevas Páginas
```
1. Crear carpeta en app/ (ej: app/nueva-pagina/)
2. Crear page.tsx dentro
3. Importar componentes necesarios
4. Agregar ruta a Header navigation
```

### 2. Crear Componentes Reutilizables
```
1. Crear archivo en components/
2. Exportar como default export
3. Usar en páginas
4. Importar tipos si necesita props
```

### 3. Actualizar Estilos
```
1. Modificar colors en tailwind.config.js
2. Usar clases en componentes
3. Testear en diferentes tamaños
```

## Debugging

### En Desarrollo
```bash
npm run dev
# Abre http://localhost:3000
# Console en DevTools del navegador
```

### Errors Comunes
- **Import Error**: Verificar ruta y extensión .tsx
- **Style Error**: Verificar clase Tailwind en config
- **Tipo Error**: Verificar interfaz TypeScript

## Testing Manual

### Puntos de Control
- [ ] Página se carga correctamente
- [ ] Responsive en mobile/tablet/desktop
- [ ] Enlaces funcionan
- [ ] Formularios validan entrada
- [ ] Contraste de color adecuado
- [ ] Sin errores en consola

### Navegadores Soportados
- Chrome/Edge (última versión)
- Firefox (última versión)
- Safari (última versión)
- Mobile browsers

## Performance

### Optimizaciones
- Next.js Image component para imágenes
- Code splitting automático
- CSS-in-JS optimizado
- Lazy loading de componentes

### Métricas
- Lighthouse > 90
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1

## Recursos Útiles

- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons/)
- [TypeScript](https://www.typescriptlang.org/docs/)
