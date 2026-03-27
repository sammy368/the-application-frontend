import React from 'react';
import { Link } from 'react-router-dom';

interface GuestLayoutProps {
  children: React.ReactNode;
}

function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="guest-layout">
      <header className="guest-header">
        <nav>
          <div className="nav-brand">My App</div>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </header>

      <main className="guest-main">
        {children}
      </main>

      <footer className="guest-footer">
        <p>&copy; 2026 My Application</p>
      </footer>
    </div>
  );
}

export default GuestLayout;