import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdminSidebar from '../components/AdminSidebar';
import './AdminDashboard.css';

const AdminTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/tickets', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTickets(res.data);
      } catch (err) {
        setError('Failed to fetch tickets.');
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      const token = localStorage.getItem('token');
      await axios.put(`/api/tickets/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTickets(tickets => tickets.map(t => t._id === id ? { ...t, status: newStatus } : t));
    } catch (err) {
      alert('Failed to update status.');
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="admin-dashboard-root">
      <Navbar />
      <div className="admin-dashboard-content">
        <AdminSidebar />
        <main className="admin-dashboard-main">
          <h1 className="admin-dashboard-title">All Tickets</h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
          ) : (
            <div className="admin-dashboard-table-section">
              <table className="admin-dashboard-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>User</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map(ticket => (
                    <tr key={ticket._id}>
                      <td>{ticket._id}</td>
                      <td>{ticket.title}</td>
                      <td>{ticket.description}</td>
                      <td>
                        <select
                          value={ticket.status}
                          onChange={e => handleStatusChange(ticket._id, e.target.value)}
                          disabled={updatingId === ticket._id}
                          style={{ minWidth: 120 }}
                        >
                          <option value="open">Open</option>
                          <option value="in progress">In Progress</option>
                          <option value="closed">Closed</option>
                        </select>
                        {updatingId === ticket._id && <span style={{ marginLeft: 8, color: '#2563eb' }}>Updating...</span>}
                      </td>
                      <td>{ticket.createdBy?.email || 'N/A'}</td>
                      <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminTickets; 