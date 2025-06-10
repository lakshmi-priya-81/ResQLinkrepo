/* AdminLoginForm component for handling admin login with validation and loading state */
const { useState, useEffect } = React;

function AdminLoginForm() {
  // State for form inputs, error messages, and loading status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check if admin is already logged in (e.g., via localStorage)
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('adminLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Effect to clear error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [error]);

  // Handle form submission with basic validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call for login
    setTimeout(() => {
      if (username === 'admin' && password === 'password123') {
        setIsLoggedIn(true);
        localStorage.setItem('adminLoggedIn', 'true');
        setError('');
        // Redirect to admin dashboard
        window.location.href = '/dashboard';
      } else {
        setError('Invalid username or password');
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('adminLoggedIn');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-card">
      <h2>Admin Login</h2>
      <p className="login-description">
        Welcome, Admin! Use your credentials to securely manage organ and blood donor records.
      </p>
      {isLoggedIn ? (
        <div>
          <p>Welcome, Admin! You are logged in.</p>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#d32f2f',
              color: 'white',
              padding: '12px',
              fontSize: '16px',
              fontWeight: '600',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#b71c1c')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#d32f2f')}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Admin Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      )}
    </div>
  );
}