import React, { useState } from 'react';
import { API_URL, EVENT_ID } from '../config';

// onLoginSuccess(personId, currentScore)
const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/events/startcourse/${EVENT_ID}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();

      if (data.status === true) {
        onLoginSuccess(data.data.person_id, data.data.currentScore || 0);
      } else {
        setError(data.message || 'Email not found. Please register first.');
      }
    } catch (err) {
      setError('Error connecting to backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <div style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '20px', boxShadow: 'var(--shadow)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Welcome to Start Course 26</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Enter your registered email to start.</p>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} required
            style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '16px' }}
          />
          {error && <div style={{ color: 'var(--danger)', marginBottom: '15px' }}>{error}</div>}
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isLoading}>
            {isLoading ? 'LOADING...' : 'START'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;