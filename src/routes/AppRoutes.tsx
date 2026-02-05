import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../features/auth';
import { useAuth } from '../features/auth';

// Placeholder components
const DashboardPage: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Dashboard</h1>
    <p>Bienvenido al dashboard</p>
  </div>
);

const NotFoundPage: React.FC = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404 - Página no encontrada</h1>
    <a href="/">Volver al inicio</a>
  </div>
);

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

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
