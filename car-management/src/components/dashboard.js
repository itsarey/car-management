import React from 'react';
import './dashboard.css';

const cars = [
  { id: 1, name: 'Car 1', model: '2018', status: 'On road' },
  { id: 2, name: 'Car 2', model: '2009', status: 'In Service' },
  { id: 3, name: 'Car 3', model: '2020', status: 'At Petrol Station' },
];

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <h2>Car Management Dashboard</h2>
        <button onClick={onLogout} className="logout-button">Logout</button>
      </nav>
      <div className="car-grid">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <h3>{car.name}</h3>
            <p>Model: {car.model}</p>
            <p>Status: {car.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;