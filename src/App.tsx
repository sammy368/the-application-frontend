import './App.css';
import { useAuth } from './hooks/useAuth';
import GuestLayout from './layouts/guest.layout';
import AuthLayout from './layouts/auth.layout';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';

// Placeholder components for routes
const Dashboard = () => (
  <div className="dashboard-content">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard! This is protected content.</p>
  </div>
);

const Profile = () => (
  <div className="profile-content">
    <h1>Profile</h1>
    <p>Your profile information goes here.</p>
  </div>
);


const Register = () => (
  <div className="register-content">
    <h1>Register</h1>
    <p>Registration form will go here.</p>
  </div>
);

const Landing = () => (
  <div className="landing-content">
    <h1>Welcome to My Application</h1>
    <p>Please login or register to continue.</p>
  </div>
);

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

// Guest Route component (redirects to dashboard if already logged in)
const GuestRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  return !isLoggedIn ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes - accessible to everyone */}
        <Route path="/" element={
          <GuestLayout>
            <Landing />
          </GuestLayout>
        } />

        {/* Guest-only routes - redirect to dashboard if logged in */}
        <Route path="/login" element={
          <GuestRoute>
            <GuestLayout>
              <Login />
            </GuestLayout>
          </GuestRoute>
        } />

        <Route path="/register" element={
          <GuestRoute>
            <GuestLayout>
              <Register />
            </GuestLayout>
          </GuestRoute>
        } />

        {/* Protected routes - require authentication */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <AuthLayout>
              <Dashboard />
            </AuthLayout>
          </ProtectedRoute>
        } />

        <Route path="/profile" element={
          <ProtectedRoute>
            <AuthLayout>
              <Profile />
            </AuthLayout>
          </ProtectedRoute>
        } />

        {/* Catch all route - redirect to appropriate page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
