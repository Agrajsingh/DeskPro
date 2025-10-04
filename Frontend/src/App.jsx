import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import AdminLogin from './pages/AdminLogin';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminTickets from './pages/AdminTickets';
import AdminUsers from './pages/AdminUsers';
import MyTickets from './pages/MyTickets';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-tickets" element={<AdminTickets />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
