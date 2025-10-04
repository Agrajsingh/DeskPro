import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import styles from '../pages/HomePage.module.css';

const Navbar = () => (
  <nav className={`navbar ${styles.fadeInDown}`}>
    <div className="navbar-left">DESKPRO</div>
    <div className="navbar-right">
      <Link to="/">Home</Link>
      <Link to="/login">User</Link>
      <Link to="/admin">Admin</Link>
    </div>
  </nav>
);

export default Navbar; 