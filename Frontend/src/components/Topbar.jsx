import React from 'react';

const Topbar = () => (
  <header className="flex items-center justify-between bg-teal-400 px-6 py-3">
    <div className="text-white font-bold text-xl">Helpdesk</div>
    <div className="flex items-center gap-4">
      <span className="text-white">🔔</span>
      <span className="text-white">👤</span>
      <span className="text-white">⚙️</span>
      <span className="text-white">⎋</span>
    </div>
  </header>
);

export default Topbar; 