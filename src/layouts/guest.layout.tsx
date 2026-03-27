import React from 'react';

interface GuestLayoutProps {
  children: React.ReactNode;
}

function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="guest-layout">
      <header className="guest-header">
        <nav>
          {/* Add navigation for guest users */}
          <div className="nav-brand">My App</div>
          <div className="nav-links">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
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