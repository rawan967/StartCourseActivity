import React, { useState } from 'react';
import { API_URL, EVENT_ID } from '../config';

// onLoginSuccess(personId, currentScore, course, group)
const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState([]); // بتتملي لو الإيميل مسجل في أكتر من كورس
  const [course, setCourse] = useState('');
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
        body: JSON.stringify({ email: email, course: course || undefined }),
      });

      const data = await response.json();

      if (data.status === true && data.needCourse) {
        setCourses(data.courses);
        setError('Your email is registered in more than one course. Please choose one.');
      } else if (data.status === true) {
        onLoginSuccess(
          data.data.person_id,
          data.data.currentScore || 0,
          data.data.course,
          data.data.group
        );
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
          <input type="email" placeholder="Email..." value={email}
            onChange={(e) => { setEmail(e.target.value); setCourses([]); setCourse(''); }} required
            style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '16px' }}
          />

          {courses.length > 0 && (
            <select value={course} onChange={(e) => setCourse(e.target.value)} required
              style={{ width: '100%', padding: '12px', marginBottom: '20px', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '16px' }}>
              <option value="">Choose your course...</option>
              {courses.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          )}

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