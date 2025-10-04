import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UserLogin.css';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      if (res.data.role === 'user') {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setError('Not a user account.');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="userlogin-bg" style={{ flex: 1 }}>
        <form onSubmit={handleSubmit} className="userlogin-form">
          <h2 className="userlogin-title">User Login</h2>
          {error && <div className="userlogin-error">{error}</div>}
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="userlogin-input" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="userlogin-input" required />
          <button type="submit" className="userlogin-btn">Login</button>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <span style={{ color: '#6b7280', fontSize: '0.98rem' }}>Don't have an account? </span>
            <Link to="/register" style={{ color: '#2563eb', fontWeight: 600, textDecoration: 'underline', marginLeft: 4 }}>Register</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserLogin; 