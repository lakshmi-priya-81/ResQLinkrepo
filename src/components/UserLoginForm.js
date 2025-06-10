/* UserLoginForm component for handling user login with validation and session management */
const { useState, useEffect } = React;

function UserLoginForm() {
  // State for form inputs, error messages, and login status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Effect to check if user is already logged in
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('userLoggedIn');
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

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call for login
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'user123') {
        setIsLoggedIn(true);
        localStorage.setItem('userLoggedIn', 'true');
        setError('');
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        setError('Invalid email or password');
        setIsLoading(false);
      }
    }, 1000); // Simulate network delay
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userLoggedIn');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-card">
      <img
        src="https://www.sakraworldhospital.com/assets/spl_splimgs/organ-donation-2020-1.webp"
        alt="Organ Donation Banner"
        className="login-logo"
      />
      <h2>User Login</h2>
      <p className="login-description">
        Sign in to manage your donor profile, check organ availability, and update your health records.
      </p>
      {isLoggedIn ? (
        <div>
          <p>Welcome back! You are logged in.</p>
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
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
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
      <p className="register-link">
        Not registered yet? <a href="/register">Register here</a>
      </p>
    </div>
  );
}