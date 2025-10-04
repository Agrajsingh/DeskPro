import React from 'react';

const StatCard = ({ label, value, colorClass }) => (
  <div className={`rounded-lg shadow-md p-6 flex flex-col items-center ${colorClass}`}>
    <div className="text-3xl font-bold mb-2">{value}</div>
    <div className="text-lg font-semibold">{label}</div>
  </div>
);

export default StatCard; 