import React from 'react';
import './Footer.css';
import styles from '../pages/HomePage.module.css';

const Footer = ({ theme }) => (
  <footer className={`footer ${styles.fadeInUp}`} style={{ color: 'var(--text-secondary)' }}>
    &copy; {new Date().getFullYear()} Deskpro Helpdesk. All rights reserved.
  </footer>
);

export default Footer; 