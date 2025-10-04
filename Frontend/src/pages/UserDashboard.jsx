import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserSidebar from '../components/UserSidebar';
import NewTicketModal from '../components/NewTicketModal';
import './AdminDashboard.css';

const UserDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [createError, setCreateError] = useState('');

  // Fetch user's tickets
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
  }, [modalOpen]); // refetch after modal closes (new ticket)

  // Ticket stats
  const stats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in progress').length,
    closed: tickets.filter(t => t.status === 'closed').length,
  };

  // Create ticket handler
  const handleCreateTicket = async (data) => {
    setCreateError('');
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/tickets', data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setModalOpen(false);
    } catch (err) {
      setCreateError('Failed to create ticket.');
    }
  };

  return (
    <div className="admin-dashboard-root">
      <Navbar />
      <div className="admin-dashboard-content">
        <UserSidebar onNewTicket={() => setModalOpen(true)} />
        <main className="admin-dashboard-main">
          <h1 className="admin-dashboard-title">User Dashboard</h1>
          <div className="admin-dashboard-stats">
            <div className="admin-dashboard-stat green">Total Tickets<br /><span>{stats.total}</span></div>
            <div className="admin-dashboard-stat blue">Open<br /><span>{stats.open}</span></div>
            <div className="admin-dashboard-stat yellow">In Progress<br /><span>{stats.inProgress}</span></div>
            <div className="admin-dashboard-stat red">Closed<br /><span>{stats.closed}</span></div>
          </div>
          <button className="modal-submit" style={{ maxWidth: 220, marginBottom: 24 }} onClick={() => setModalOpen(true)}>
            + Create New Ticket
          </button>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>
          ) : (
            <div className="admin-dashboard-table-section">
              <h2>My Tickets</h2>
              <table className="admin-dashboard-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map(ticket => (
                    <tr key={ticket._id}>
                      <td>{ticket.title}</td>
                      <td>{ticket.description}</td>
                      <td>{ticket.status}</td>
                      <td>{new Date(ticket.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <NewTicketModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleCreateTicket}
            adminCanSetStatus={false}
          />
          {createError && <div style={{ color: 'red', marginTop: 12 }}>{createError}</div>}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard; 