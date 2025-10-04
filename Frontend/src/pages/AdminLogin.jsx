import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      if (res.data.role === 'admin') {
        localStorage.setItem('token', res.data.token);
        navigate('/admin-dashboard');
      } else {
        setError('Not an admin account.');
      }
    } catch (err) {
      setError(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="adminlogin-bg" style={{ flex: 1 }}>
        <form onSubmit={handleSubmit} className="adminlogin-form">
          <h2 className="adminlogin-title">Admin Login</h2>
          {error && <div className="adminlogin-error">{error}</div>}
          <input type="email" placeholder="Admin Email" value={email} onChange={e => setEmail(e.target.value)} className="adminlogin-input" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="adminlogin-input" required />
          <button type="submit" className="adminlogin-btn">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;