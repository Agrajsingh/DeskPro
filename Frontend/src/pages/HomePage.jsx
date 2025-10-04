import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <div className={styles.hero}>
        <div className={styles.waveWrapper}>
          <svg
            className={styles.waveHand}
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            style={{ marginBottom: '1rem' }}
          >
            <g>
              <path
                d="M28 4C15.2975 4 5 14.2975 5 27C5 39.7025 15.2975 50 28 50C40.7025 50 51 39.7025 51 27C51 14.2975 40.7025 4 28 4Z"
                fill="#2563eb"
                opacity="0.1"
              />
              <path
                className={styles.waveMotion}
                d="M28 12C26.3431 12 25 13.3431 25 15V29C25 30.6569 26.3431 32 28 32C29.6569 32 31 30.6569 31 29V15C31 13.3431 29.6569 12 28 12Z"
                fill="#2563eb"
              />
            </g>
          </svg>
        </div>
        <h1 className={styles.title}>Welcome to Deskpro</h1>
        <p className={styles.subtitle}>
          The modern helpdesk solution for seamless support, ticket management, and team collaboration.
        </p>
        <div className={styles.card}>
          <h2>Why Deskpro?</h2>
          <ul style={{ textAlign: 'left', margin: '1rem 0' }}>
            <li>• Fast, secure user and admin authentication</li>
            <li>• Powerful ticket management for users and admins</li>
            <li>• Modern, responsive, and interactive UI</li>
            <li>• Built with React, Node.js, and MongoDB</li>
          </ul>
        </div>
        <div className={styles.cta}>
          <button className={styles.ctaButton} onClick={() => navigate('/register')}>Get Started</button>
        </div>
      </div>
      <Footer theme={theme} />
    </div>
  );
};

export default HomePage; 