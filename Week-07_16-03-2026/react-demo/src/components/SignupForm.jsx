// components/SignupForm.jsx
// Demonstrates: controlled inputs, onChange, onSubmit, e.preventDefault()

import { useState } from 'react';

function SignupForm() {
  // Each field is a piece of state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'frontend',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Single handler for all fields using computed property name
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())  newErrors.name  = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser page reload
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', role: 'frontend' });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Welcome, {formData.name}!</h3>
        <p>{formData.email} · {formData.role}</p>
        <button className="btn btn-reset" onClick={handleReset}>Submit another</button>
      </div>
    );
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="signup-form">

        <div className="field">
          <label className="field-label" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`field-input ${errors.name ? 'input-error' : ''}`}
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <div className="field">
          <label className="field-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className={`field-input ${errors.email ? 'input-error' : ''}`}
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <div className="field">
          <label className="field-label" htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="field-input"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="frontend">Frontend Dev</option>
            <option value="backend">Backend Dev</option>
            <option value="fullstack">Full Stack</option>
            <option value="design">Designer</option>
          </select>
        </div>

        <button type="submit" className="btn btn-submit">Register →</button>
      </form>

      {/* Live state preview panel */}
      <div className="state-preview">
        <p className="history-label">Live state</p>
        <pre className="state-pre">{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default SignupForm;
