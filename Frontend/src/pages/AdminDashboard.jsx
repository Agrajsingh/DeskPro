import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminDashboard = () => (
  <div className="admin-dashboard-root">
    <Navbar />
    <div className="admin-dashboard-content">
      <AdminSidebar />
      <main className="admin-dashboard-main">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <div className="admin-dashboard-stats">
          <div className="admin-dashboard-stat green">Total Tickets<br /><span>42</span></div>
          <div className="admin-dashboard-stat blue">Open<br /><span>10</span></div>
          <div className="admin-dashboard-stat yellow">In Progress<br /><span>5</span></div>
          <div className="admin-dashboard-stat red">Closed<br /><span>27</span></div>
        </div>
        <div className="admin-dashboard-table-section">
          <h2>Recent Tickets</h2>
          <table className="admin-dashboard-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>User</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sample Ticket</td>
                <td>Open</td>
                <td>user@example.com</td>
                <td>2024-07-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Another Ticket</td>
                <td>Closed</td>
                <td>admin@example.com</td>
                <td>2024-07-02</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

export default AdminDashboard; 