import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#7ae218', color: 'white' }}>
      <h2>☕ Morning Brew</h2>
      <div>
        <span>Welcome, <strong>{user.name}</strong></span> | 
        <span> Balance: <strong>${user.balance.toFixed(2)}</strong></span>
      </div>
    </nav>
  );
};

export default Navbar;