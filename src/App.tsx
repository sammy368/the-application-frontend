import './App.css';
import { useAuth } from './hooks/useAuth';
import GuestLayout from './layouts/guest.layout';
import AuthLayout from './layouts/auth.layout';

function App() {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? (
        <AuthLayout>
          <div className="dashboard-content">
            <h1>Welcome to your Dashboard!</h1>
            <p>You are logged in.</p>
            {/* Add your authenticated user content here */}
          </div>
        </AuthLayout>
      ) : (
        <GuestLayout>
          <div className="landing-content">
            <h1>Welcome to My Application</h1>
            <p>Please login or register to continue.</p>
            {/* Add your guest/landing page content here */}
          </div>
        </GuestLayout>
      )}
    </>
  );
}

export default App;
