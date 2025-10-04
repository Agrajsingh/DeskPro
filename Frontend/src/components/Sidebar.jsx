import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="bg-gray-100 w-48 min-h-screen p-4 flex flex-col gap-4">
    <div className="font-bold text-lg mb-6">Helpdesk</div>
    <nav className="flex flex-col gap-2">
      <Link to="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
        <span>📊</span> Dashboard
      </Link>
      <Link to="/new-ticket" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
        <span>📝</span> New Ticket
      </Link>
      <Link to="/my-tickets" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
        <span>📁</span> My Ticket
      </Link>
    </nav>
  </aside>
);

export default Sidebar; 