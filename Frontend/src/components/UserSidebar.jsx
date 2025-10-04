import React from 'react';
import { Link } from 'react-router-dom';
import './UserSidebar.css';

const UserSidebar = ({ onNewTicket }) => (
  <aside className="user-sidebar">
    <div className="user-sidebar-title">MY Workspace</div>
    <nav className="user-sidebar-nav">
      <Link to="/dashboard" className="user-sidebar-link"><span>📊</span> Dashboard</Link>
      <button className="user-sidebar-link" onClick={onNewTicket} style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}><span>📝</span> New Ticket</button>
      <Link to="/my-tickets" className="user-sidebar-link"><span>📁</span> My Tickets</Link>
    </nav>
  </aside>
);

export default UserSidebar; 