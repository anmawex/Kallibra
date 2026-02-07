<p align="center">
  <img src="public/logo.svg" alt="Kallibra Logo" width="80" height="80">
</p>

# Kallibra

<div align="center">

[![Leer en Español](https://img.shields.io/badge/Leer%20en-Español-red?style=for-the-badge)](./README.es.md)

</div>

<p align="center">
  <strong>Intelligent Financial Reconciliation Platform</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#structure">Structure</a> •
  <a href="#internationalization">i18n</a> •
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

## 📖 Description

**Kallibra** is a financial reconciliation platform designed to simplify and automate the transaction reconciliation process across multiple data sources (banks, ERPs, payment gateways).

Currently in **Beta MVP phase**, Kallibra offers tools to:
- Visualize and manage transactions from different sources
- Automatically identify discrepancies
- Reconcile transactions manually or with assistance
- Gain insights into reconciliation status

---

## ✨ Features

### 🏠 Landing Page
- Modern and professional design with animations
- Sections: Hero, Features, Highlights, Pricing
- Registration modal with confirmation
- Light/Dark theme toggling
- Fully responsive

### 🔐 Authentication
- Login with form validation (React Hook Form + Zod)
- State management with Zustand + persistence
- Route protection
- JWT token handling with automatic refresh
- Modern UI with animations

### 📊 Dashboard
- Real-time statistics cards
- Interactive charts (Recharts)
- Reconciliation status distribution
- Recent activity feed
- Collapsible navigation (Sidebar)

### 💳 Transaction Management
- Advanced table with TanStack Table
- Filtering by source, status, date, and amount
- Column sorting
- Pagination
- Data export

### 🔄 Reconciliation
- Assisted reconciliation modal
- Potential match suggestions
- Manual transaction reconciliation
- Statuses: pending, reconciled, discrepant

### 📈 Insights
- Discrepancy analysis
- Key Performance Indicators (KPIs)
- Reconciliation trends

### 📚 Documentation
- Integrated User Guide
- Sections: Getting Started, Features, Roadmap, Support
- Internationalized (ES/EN)

### 🌐 Internationalization
- Full support for Spanish and English
- Language switcher available on all pages
- Preference persistence

---

## 🛠️ Technologies

### Core
| Technology | Version | Description |
|------------|---------|-------------|
| React | 19 | UI Library |
| TypeScript | 5.9 | Static Typing |
| Vite | 7 | Build tool and dev server |

### UI & Styling
| Technology | Description |
|------------|-------------|
| TailwindCSS | Utility-first CSS framework |
| Radix UI | Accessible headless components |
| Lucide React | Icons |
| Recharts | Charts and visualizations |
| class-variance-authority | Component variants |

### State & Forms
| Technology | Description |
|------------|-------------|
| Zustand | Global state management |
| React Hook Form | Form handling |
| Zod | Schema validation |
| TanStack Table | Advanced tables |

### Internationalization
| Technology | Description |
|------------|-------------|
| i18next | i18n Framework |
| react-i18next | React integration |
| i18next-browser-languagedetector | Automatic language detection |

### Development
| Technology | Description |
|------------|-------------|
| ESLint | Linting |
| Prettier | Code formatting |
| Vitest | Testing |
| Husky + lint-staged | Git hooks |

---

## 📦 Installation

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Steps

```bash
# Clone the repository
git clone https://github.com/anmawex/kallibra.git
cd kallibra

# Install dependencies
npm install

# Copy environment variables file
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Starts the development server with HMR

# Build
npm run build        # Compiles TypeScript and builds for production
npm run preview      # Previews the production build

# Testing
npm test             # Runs tests with Vitest
npm test:ui          # Runs tests with Vitest UI

# Code Quality
npm run lint         # Runs ESLint
npm run format       # Formats code with Prettier
```

---

## 📁 Project Structure

The project uses a **feature-based architecture** that organizes code by business features:

```
src/
├── features/                    # Application Features
│   ├── auth/                   # 🔐 Authentication
│   │   ├── components/         # LoginForm, etc.
│   │   ├── hooks/              # useAuth
│   │   ├── pages/              # LoginPage
│   │   ├── services/           # authService
│   │   ├── stores/             # authStore (Zustand)
│   │   ├── types/              # TypeScript Types
│   │   ├── validators/         # Zod Schemas
│   │   └── index.ts            # Barrel export
│   │
│   ├── dashboard/              # 📊 Dashboard
│   │   ├── components/         # StatsCard, Charts, Sidebar
│   │   ├── hooks/              # useDashboardData
│   │   ├── pages/              # DashboardPage
│   │   └── ...
│   │
│   ├── transactions/           # 💳 Transactions
│   │   ├── components/         # TransactionsTable, Filters
│   │   ├── hooks/              # useTransactions
│   │   └── ...
│   │
│   ├── reconciliation/         # 🔄 Reconciliation
│   │   ├── components/         # ReconciliationModal
│   │   └── ...
│   │
│   ├── insights/               # 📈 Insights & Analysis
│   │   └── ...
│   │
│   ├── filters/                # 🔍 Filter System
│   │   └── ...
│   │
│   └── landing/                # 🏠 Landing Page
│       ├── components/         # Navbar, Footer, Sections
│       ├── pages/              # LandingPage, DocsPage
│       └── ...
│
├── shared/                      # Shared Code
│   ├── components/             # Input, Button, Modal, Card, etc.
│   ├── hooks/                  # Reusable hooks
│   ├── i18n/                   # i18n Configuration
│   │   └── locales/            # es.json, en.json
│   ├── theme/                  # ThemeProvider, ThemeToggle
│   └── utils/                  # Utilities (cn, formatters)
│
├── routes/                      # Route Configuration
│   └── AppRoutes.tsx           # Route definition
│
├── App.tsx                      # Root component
└── main.tsx                     # Entry point
```

---

## 🌐 Internationalization

Kallibra supports multiple languages using **i18next**:

### Available Languages
- 🇪🇸 Spanish (es) - Main/Default
- 🇺🇸 English (en)

### Translation Files
```
src/shared/i18n/locales/
├── es.json    # Spanish translations
└── en.json    # English translations
```

### Component Usage
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('landing.hero.title')}</h1>;
}
```

### Language Switching
The `LanguageSwitcher` component is available in:
- Landing Page Navbar
- Login Page
- Documentation Page
- Legal Pages (Privacy, Terms)

---

## 🔒 Environment Variables

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_ENV=development
```

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | API Base URL | `http://localhost:3000/api` |
| `VITE_ENV` | Execution Environment | `development` |

---

## 🚢 Deployment

### Vercel (Recommended)

The project includes configuration for Vercel (`vercel.json`):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Generate production build
npm run build

# Files will be in /dist
```

---

## 📝 Code Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `LoginForm.tsx` |
| Hooks | camelCase with `use` prefix | `useAuth.ts` |
| Types/Interfaces | PascalCase | `User`, `Transaction` |
| Constants | UPPER_SNAKE_CASE | `API_URL` |
| CSS Files | Same name as component | `LoginPage.css` |
| Translations | dot notation | `landing.hero.title` |

---

## 🎨 Theme

Kallibra supports light and dark themes using CSS Variables:

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

The theme can be toggled using the `ThemeToggle` component.

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run with UI
npm test:ui

# Coverage
npm test -- --coverage
```

---

## 📄 Available Pages

| Route | Description | Access |
|------|-------------|--------|
| `/` | Landing Page | Public |
| `/login` | Login Page | Public |
| `/dashboard` | Main Dashboard | Protected |
| `/docs` | Documentation | Public |
| `/privacy` | Privacy Policy | Public |
| `/terms` | Terms of Service | Public |

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👤 Author

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

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://anmawex.vercel.app/">anmawex</a>
</p>
