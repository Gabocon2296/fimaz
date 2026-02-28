# Guía de Contribuciones

¡Gracias por tu interés en contribuir a la mejora del sitio web de la Facultad de Informática Mazatlán!

## Antes de Empezar

- Lee el [README.md](README.md) para entender el proyecto
- Familiarízate con la [Guía de Desarrollo](DEVELOPMENT.md)
- Asegúrate de tener Node.js v18+ instalado

## Flujo de Desarrollo

### 1. Preparar tu Ambiente

```bash
# Clonar el repositorio
git clone https://github.com/Gabocon2296/fimaz.git
cd fimaz

# Instalar dependencias
npm install

# Crear rama de desarrollo
git checkout -b feature/tu-feature
```

### 2. Realizar Cambios

- Haz cambios pequeños y enfocados
- Sigue las convenciones de código
- Crea componentes reutilizables
- Mantén la consistencia visual

### 3. Testear Cambios

```bash
# Desarrollo
npm run dev

# Verificar tipos
npm run lint

# Formatear código
npm run format

# Build para producción
npm run build
npm start
```

### 4. Commit y Push

```bash
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/tu-feature
```

### 5. Crear Pull Request

- Describe claramente qué cambia y por qué
- Adjunta screenshots si aplica (para cambios UI)
- Referencia issues relacionados si existen
- Espera revisión

## Áreas para Contribuir

### 🎨 Diseño y UI
- Mejorar diseño visual
- Agregar transiciones
- Optimizar responsividad
- Accessibility improvements

### 📝 Contenido
- Mejorar textos
- Agregar falta de contenido
- Traducir si necesario
- Actualizar información

### 🛠️ Funcionalidad
- Nuevas páginas
- Componentes interactivos
- Formularios mejorados
- Búsqueda avanzada

### 📚 Documentación
- Mejorar README
- Agregar ejemplos
- Documentar APIs
- Crear guías

### 🐛 Bugs
- Reportar errores
- Sugerir fixes
- Testear cambios
- Validar correcciones

## Estándares de Código

### TypeScript
```tsx
// ✅ Bien
interface UserProps {
  name: string
  email: string
}

function UserCard({ name, email }: UserProps) {
  return <div>{name}</div>
}

// ❌ Evitar
function UserCard(props: any) {
  return <div>{props.name}</div>
}
```

### Tailwind CSS
```tsx
// ✅ Bien
<button className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors">
  Click me
</button>

// ❌ Evitar
<button style={{ padding: '8px 16px', backgroundColor: '#0284c7' }}>
  Click me
</button>
```

### Componentes
```tsx
// ✅ Bien: Componente limpio y reutilizable
export default function Badge({ label, variant = 'primary' }: BadgeProps) {
  const colors = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-gray-100 text-gray-700',
  }
  
  return <span className={`px-2 py-1 rounded text-xs font-medium ${colors[variant]}`}>
    {label}
  </span>
}

// ❌ Evitar: Hardcoded, no reutilizable
export default function Badge() {
  return <span className="bg-blue-100 text-blue-700 px-2 py-1">Badge</span>
}
```

## Proceso de Revisión

1. **Revisión de Código**: Verificamos que siga estándares
2. **Testing**: Probamos en múltiples navegadores
3. **Performance**: Medimos impacto en rendimiento
4. **Accesibilidad**: Validamos WCAG compliance
5. **Merge**: Se integra a main tras aprobación

## Preguntas y Soporte

- **Issues**: Usa GitHub Issues para reportar bugs
- **Discussions**: Para preguntas generales
- **Email**: info@fimaz.uas.edu.mx para consultas formales

## Código de Conducta

- Respeta a otros contribuidores
- Sé constructivo en feedback
- Reporta mala conducta
- Celebra las contribuciones

## Reconocimiento

Los contribuidores activos aparecerán en:
- [CONTRIBUTORS.md](CONTRIBUTORS.md)
- Commits del repositorio
- Releases notes

## Licencia

Al contribuir, aceptas que tu código se licencia bajo los términos del proyecto.

---

¡Gracias por contribuir! 🎉
