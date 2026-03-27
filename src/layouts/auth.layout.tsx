import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="auth-layout">
      <header className="auth-header">
        <nav>
          {/* Add navigation for authenticated users */}
          <div className="nav-brand">My App</div>
          <div className="nav-links">
            <a href="/dashboard">Dashboard</a>
            <a href="/profile">Profile</a>
            <button onClick={() => {
              localStorage.removeItem('token');
              window.location.reload();
            }}>
              Logout
            </button>
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