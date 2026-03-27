/// <reference types="vite/client" />

import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const base_url = import.meta.env.VITE_API_BASE_URL;

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: base_url,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // Add authorization header if token exists
    const token = localStorage.getItem('token'); // or however you store your token
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }

    // Add other common headers if needed
    config.headers.set('X-Requested-With', 'XMLHttpRequest');

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      // Redirect to login or refresh token
      window.location.href = '/login';
    }

    if (error.response?.status === 403) {
      // Forbidden - maybe show a message
      console.error('Access forbidden');
    }

    if (error.response?.status >= 500) {
      // Server error
      console.error('Server error occurred');
    }

    return Promise.reject(error);
  }
);

export default api;