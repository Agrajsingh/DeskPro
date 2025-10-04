import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './UserRegister.css';

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await axios.post('/api/auth/register', { name, email, password });
      setSuccess('Registration successful! Please login.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div className="userregister-bg" style={{ flex: 1 }}>
        <form onSubmit={handleSubmit} className="userregister-form">
          <h2 className="userregister-title">User Register</h2>
          {error && <div className="userregister-error">{error}</div>}
          {success && <div className="userregister-success">{success}</div>}
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="userregister-input" required />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="userregister-input" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="userregister-input" required />
          <button type="submit" className="userregister-btn">Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserRegister; 