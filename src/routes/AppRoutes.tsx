import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { LoginPage, useAuth } from '../features/auth';
import { DashboardPage } from '../features/dashboard';
import { LandingPage, DocsPage } from '../features/landing';

import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { LanguageSwitcher } from '@/shared/components';
import { Button } from '@/shared/components/button';
import { ArrowLeft } from 'lucide-react';


// 404 Page
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <h1 className="text-4xl font-bold mb-4">404</h1>
    <p className="text-muted-foreground mb-6">Página no encontrada</p>
    <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
  </div>
);

// Simple Legal Page Component
const LegalPage: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-4">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="Kallibra Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Kallibra</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">{t('legal.backHome')}</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">{title}</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none text-muted-foreground space-y-4">
          {content}
        </div>
      </main>
    </div>
  );
};

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPage 
      title={t('legal.privacy.title')}
      content={
        <>
          <p>{t('legal.privacy.lastUpdated')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.privacy.sections.collection.title')}</h2>
          <p>{t('legal.privacy.sections.collection.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.privacy.sections.usage.title')}</h2>
          <p>{t('legal.privacy.sections.usage.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.privacy.sections.security.title')}</h2>
          <p>{t('legal.privacy.sections.security.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.privacy.sections.contact.title')}</h2>
          <p>{t('legal.privacy.sections.contact.content')}</p>
        </>
      }
    />
  );
};

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LegalPage 
      title={t('legal.terms.title')}
      content={
        <>
          <p>{t('legal.terms.lastUpdated')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.terms.sections.acceptance.title')}</h2>
          <p>{t('legal.terms.sections.acceptance.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.terms.sections.license.title')}</h2>
          <p>{t('legal.terms.sections.license.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.terms.sections.disclaimer.title')}</h2>
          <p>{t('legal.terms.sections.disclaimer.content')}</p>
          <h2 className="text-xl font-semibold text-foreground mt-6 mb-3">{t('legal.terms.sections.limitations.title')}</h2>
          <p>{t('legal.terms.sections.limitations.content')}</p>
        </>
      }
    />
  );
};

// Protected Route Component
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Login Route Component (redirects to dashboard if authenticated)
const LoginRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        
        <Route
          path="/login"
          element={
            <LoginRoute>
              <LoginPage />
            </LoginRoute>
          }
        />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        {/* Add more protected routes here as needed */}
        {/* <Route path="/reconciliations" element={<ProtectedRoute><ReconciliationsPage /></ProtectedRoute>} /> */}
        {/* <Route path="/uploads" element={<ProtectedRoute><UploadsPage /></ProtectedRoute>} /> */}
        {/* <Route path="/reports" element={<ProtectedRoute><ReportsPage /></ProtectedRoute>} /> */}
        {/* <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
