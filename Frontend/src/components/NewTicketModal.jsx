import React, { useState } from 'react';
import './NewTicketModal.css';

const NewTicketModal = ({ isOpen, onClose, onSubmit, adminCanSetStatus }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('open');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }
    onSubmit({ title, description, status: 'open' }); // always 'open' for user
    setTitle('');
    setDescription('');
    setStatus('open');
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Create New Ticket</h2>
        {error && <div className="modal-error">{error}</div>}
        <form onSubmit={handleSubmit} className="modal-form">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="modal-input"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="modal-textarea"
            required
          />
          {/* Only show status select if adminCanSetStatus is true */}
          {adminCanSetStatus && (
            <select
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="modal-select"
            >
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="closed">Closed</option>
            </select>
          )}
          <button type="submit" className="modal-submit">Create Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default NewTicketModal; 