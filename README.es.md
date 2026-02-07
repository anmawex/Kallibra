<p align="center">
  <img src="public/logo.svg" alt="Kallibra Logo" width="80" height="80">
</p>

# Kallibra

<div align="center">

[![Read in English](https://img.shields.io/badge/Read%20in-English-blue?style=for-the-badge)](./README.md)

</div>

<p align="center">
  <strong>Plataforma de Conciliación Financiera Inteligente</strong>
</p>

<p align="center">
  <a href="#características">Características</a> •
  <a href="#tecnologías">Tecnologías</a> •
  <a href="#instalación">Instalación</a> •
  <a href="#uso">Uso</a> •
  <a href="#estructura">Estructura</a> •
  <a href="#internacionalización">i18n</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
</p>

---

## 📖 Descripción

**Kallibra** es una plataforma de conciliación financiera diseñada para simplificar y automatizar el proceso de conciliación de transacciones entre múltiples fuentes de datos (bancos, ERPs, pasarelas de pago). 

Actualmente en **fase Beta MVP**, Kallibra ofrece herramientas para:
- Visualizar y gestionar transacciones de diferentes fuentes
- Identificar discrepancias automáticamente
- Conciliar transacciones de forma manual o asistida
- Obtener insights sobre el estado de las conciliaciones

---

## ✨ Características

### 🏠 Landing Page
- Diseño moderno y profesional con animaciones
- Secciones: Hero, Features, Highlights, Pricing
- Modal de registro con confirmación
- Tema claro/oscuro
- Completamente responsive

### 🔐 Autenticación
- Login con validación (React Hook Form + Zod)
- Gestión de estado con Zustand + persistencia
- Protección de rutas
- Manejo de tokens JWT con refresh automático
- UI moderna con animaciones

### 📊 Dashboard
- Tarjetas de estadísticas en tiempo real
- Gráficos interactivos (Recharts)
- Distribución de estados de conciliación
- Actividad reciente
- Navegación colapsable (Sidebar)

### 💳 Gestión de Transacciones
- Tabla avanzada con TanStack Table
- Filtros por fuente, estado, fecha y monto
- Ordenamiento por columnas
- Paginación
- Exportación de datos

### 🔄 Conciliación
- Modal de conciliación asistida
- Sugerencias de coincidencias potenciales
- Conciliación manual de transacciones
- Estados: pendiente, conciliado, discrepante

### 📈 Insights
- Análisis de discrepancias
- Indicadores clave de rendimiento (KPIs)
- Tendencias de conciliación

### 📚 Documentación
- Guía de usuario integrada
- Secciones: Getting Started, Features, Roadmap, Support
- Internacionalizada (ES/EN)

### 🌐 Internacionalización
- Soporte completo para Español e Inglés
- Selector de idioma en todas las páginas
- Persistencia de preferencia

---

## 🛠️ Tecnologías

### Core
| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| React | 19 | Biblioteca UI |
| TypeScript | 5.9 | Tipado estático |
| Vite | 7 | Build tool y dev server |

### UI & Styling
| Tecnología | Descripción |
|------------|-------------|
| TailwindCSS | Framework de utilidades CSS |
| Radix UI | Componentes accesibles headless |
| Lucide React | Iconos |
| Recharts | Gráficos y visualizaciones |
| class-variance-authority | Variantes de componentes |

### State & Forms
| Tecnología | Descripción |
|------------|-------------|
| Zustand | Gestión de estado global |
| React Hook Form | Manejo de formularios |
| Zod | Validación de esquemas |
| TanStack Table | Tablas avanzadas |

### Internationalization
| Tecnología | Descripción |
|------------|-------------|
| i18next | Framework de i18n |
| react-i18next | Integración con React |
| i18next-browser-languagedetector | Detección automática de idioma |

### Development
| Tecnología | Descripción |
|------------|-------------|
| ESLint | Linting |
| Prettier | Formateo de código |
| Vitest | Testing |
| Husky + lint-staged | Git hooks |

---

## 📦 Instalación

### Prerrequisitos
- Node.js >= 18.x
- npm >= 9.x

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/anmawex/kallibra.git
cd kallibra

# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo con HMR

# Build
npm run build        # Compila TypeScript y construye para producción
npm run preview      # Preview de la build de producción

# Testing
npm test             # Ejecuta los tests con Vitest
npm test:ui          # Ejecuta los tests con UI de Vitest

# Code Quality
npm run lint         # Ejecuta ESLint
npm run format       # Formatea el código con Prettier
```

---

## 📁 Estructura del Proyecto

El proyecto utiliza una **arquitectura feature-based** que organiza el código por características de negocio:

```
src/
├── features/                    # Características de la aplicación
│   ├── auth/                   # 🔐 Autenticación
│   │   ├── components/         # LoginForm, etc.
│   │   ├── hooks/              # useAuth
│   │   ├── pages/              # LoginPage
│   │   ├── services/           # authService
│   │   ├── stores/             # authStore (Zustand)
│   │   ├── types/              # Tipos TypeScript
│   │   ├── validators/         # Esquemas Zod
│   │   └── index.ts            # Barrel export
│   │
│   ├── dashboard/              # 📊 Dashboard
│   │   ├── components/         # StatsCard, Charts, Sidebar
│   │   ├── hooks/              # useDashboardData
│   │   ├── pages/              # DashboardPage
│   │   └── ...
│   │
│   ├── transactions/           # 💳 Transacciones
│   │   ├── components/         # TransactionsTable, Filters
│   │   ├── hooks/              # useTransactions
│   │   └── ...
│   │
│   ├── reconciliation/         # 🔄 Conciliación
│   │   ├── components/         # ReconciliationModal
│   │   └── ...
│   │
│   ├── insights/               # 📈 Insights y Análisis
│   │   └── ...
│   │
│   ├── filters/                # 🔍 Sistema de Filtros
│   │   └── ...
│   │
│   └── landing/                # 🏠 Landing Page
│       ├── components/         # Navbar, Footer, Sections
│       ├── pages/              # LandingPage, DocsPage
│       └── ...
│
├── shared/                      # Código compartido
│   ├── components/             # Input, Button, Modal, Card, etc.
│   ├── hooks/                  # Hooks reutilizables
│   ├── i18n/                   # Configuración i18n
│   │   └── locales/            # es.json, en.json
│   ├── theme/                  # ThemeProvider, ThemeToggle
│   └── utils/                  # Utilidades (cn, formatters)
│
├── routes/                      # Configuración de rutas
│   └── AppRoutes.tsx           # Definición de rutas
│
├── App.tsx                      # Componente raíz
└── main.tsx                     # Entry point
```

---

## 🌐 Internacionalización

Kallibra soporta múltiples idiomas usando **i18next**:

### Idiomas Disponibles
- 🇪🇸 Español (es) - Por defecto
- 🇺🇸 English (en)

### Archivos de Traducción
```
src/shared/i18n/locales/
├── es.json    # Traducciones en español
└── en.json    # Traducciones en inglés
```

### Uso en Componentes
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('landing.hero.title')}</h1>;
}
```

### Cambiar Idioma
El componente `LanguageSwitcher` está disponible en:
- Navbar de la Landing Page
- Página de Login
- Página de Documentación
- Páginas Legales (Privacy, Terms)

---

## 🔒 Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_ENV=development
```

| Variable | Descripción | Default |
|----------|-------------|---------|
| `VITE_API_URL` | URL base de la API | `http://localhost:3000/api` |
| `VITE_ENV` | Entorno de ejecución | `development` |

---

## 🚢 Deployment

### Vercel (Recomendado)

El proyecto incluye configuración para Vercel (`vercel.json`):

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
# Generar build de producción
npm run build

# Los archivos estarán en /dist
```

---

## 📝 Convenciones de Código

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `LoginForm.tsx` |
| Hooks | camelCase con prefijo `use` | `useAuth.ts` |
| Tipos/Interfaces | PascalCase | `User`, `Transaction` |
| Constantes | UPPER_SNAKE_CASE | `API_URL` |
| Archivos CSS | Mismo nombre que componente | `LoginPage.css` |
| Traducciones | dot notation | `landing.hero.title` |

---

## 🎨 Tema

Kallibra soporta tema claro y oscuro con CSS Variables:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 270 67% 47%;
  /* ... */
}

.dark {
  --background: 270 50% 4%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

El tema se puede cambiar con el componente `ThemeToggle`.

---

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Ejecutar con UI
npm test:ui

# Coverage
npm test -- --coverage
```

---

## 📄 Páginas Disponibles

| Ruta | Descripción | Acceso |
|------|-------------|--------|
| `/` | Landing Page | Público |
| `/login` | Página de Login | Público |
| `/dashboard` | Dashboard Principal | Protegido |
| `/docs` | Documentación | Público |
| `/privacy` | Política de Privacidad | Público |
| `/terms` | Términos de Servicio | Público |

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

---

## 👤 Autor

<p align="center">
  <a href="https://anmawex.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-anmawex-blue?style=for-the-badge&logo=vercel" alt="Portfolio">
  </a>
  <a href="https://github.com/anmawex">
    <img src="https://img.shields.io/badge/GitHub-anmawex-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/angelcordero1003/">
    <img src="https://img.shields.io/badge/LinkedIn-Angel%20Cordero-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<p align="center">
  Hecho con ❤️ por <a href="https://anmawex.vercel.app/">anmawex</a>
</p>
