import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => (
  <aside className="admin-sidebar">
    <div className="admin-sidebar-title">MY Workspace</div>
    <nav className="admin-sidebar-nav">
      <Link to="/admin-dashboard" className="admin-sidebar-link"><span>📊</span> Dashboard</Link>
      <Link to="/admin-tickets" className="admin-sidebar-link"><span>🎫</span> All Tickets</Link>
      <Link to="/admin-users" className="admin-sidebar-link"><span>👥</span> Users</Link>
    </nav>
  </aside>
);

export default AdminSidebar; 