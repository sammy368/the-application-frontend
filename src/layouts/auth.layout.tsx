import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
    const {logout} = useAuth();
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <nav>
          <div className="nav-brand">My App</div>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </header>

      <main className="auth-main">
        {children}
      </main>

      <footer className="auth-footer">
        <p>&copy; 2026 My Application</p>
      </footer>
    </div>
  );
}

export default AuthLayout;