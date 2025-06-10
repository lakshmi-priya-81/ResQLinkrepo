/* RegisterForm component for handling donor registration with validation and persistence */
const { useState, useEffect } = React;

function RegisterForm() {
  // State for form inputs, error messages, and submission status
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    location: '',
    donationTypes: { blood: false, organs: false },
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // Effect to load saved form data from localStorage
  useEffect(() => {
    const savedFormData = localStorage.getItem('registerFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Effect to save form data to localStorage on change
  useEffect(() => {
    if (formData.fullname || formData.email || formData.phone || formData.location) {
      localStorage.setItem('registerFormData', JSON.stringify(formData));
    }
  }, [formData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      donationTypes: { ...prev.donationTypes, [id]: checked },
    }));
  };

  // Handle form submission with validation
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.fullname || !formData.email || !formData.phone || !formData.location) {
      setError('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }
    if (!formData.donationTypes.blood && !formData.donationTypes.organs) {
      setError('Please select at least one donation type.');
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsRegistered(true);
      setError('');
      localStorage.setItem('isRegistered', 'true');
      setIsSubmitting(false);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 1000); // Simulate network delay
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      location: '',
      donationTypes: { blood: false, organs: false },
    });
    setIsRegistered(false);
    localStorage.removeItem('registerFormData');
    localStorage.removeItem('isRegistered');
  };

  return (
    <div className="register-form">
      <h2>Donor Registration</h2>
      <p className="login-description">
        Join our community of life savers by registering as a donor.
      </p>
      {isRegistered ? (
        <div>
          <p>Registration successful! Welcome to the Organ Donor Portal.</p>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: '#d32f2f',
              color: 'white',
              padding: '12px',
              fontSize: '15px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#b71c1c')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#d32f2f')}
          >
            Register Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullname"
            type="text"
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="location">Location (City, State)</label>
          <input
            id="location"
            type="text"
            placeholder="Location (City, State)"
            value={formData.location}
            onChange={handleInputChange}
            required
          />

          <label>Select Donation Type:</label>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="blood"
              name="donationType"
              checked={formData.donationTypes.blood}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="blood">Blood</label>

            <input
              type="checkbox"
              id="organs"
              name="donationType"
              checked={formData.donationTypes.organs}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="organs">Organs</label>
          </div>

          {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
      <p className="note">
        <strong>Note:</strong> All your details are kept confidential and used only for donor matching purposes.
      </p>
    </div>
  );
}