import axios from 'axios';
import type { LoginCredentials, AuthResponse } from '../types/auth.types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        `${API_URL}/auth/login`,
        credentials,
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(
          error.response?.data?.message || 'Error al iniciar sesión',
        );
      }
      throw new Error('Error inesperado al iniciar sesión');
    }
  }

  async logout(): Promise<void> {
    try {
      await axios.post(`${API_URL}/auth/logout`);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  async refreshToken(refreshToken: string): Promise<string> {
    try {
      const response = await axios.post<{ token: string }>(
        `${API_URL}/auth/refresh`,
        { refreshToken },
      );
      return response.data.token;
    } catch (error) {
      throw new Error('Error al refrescar el token');
    }
  }

  setAuthToken(token: string | null): void {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }
}

export const authService = new AuthService();
