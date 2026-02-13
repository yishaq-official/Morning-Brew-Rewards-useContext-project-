import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Cassie",
    points: 450,
    balance: 25.50
  });

  // Function to handle a purchase
  const buyCoffee = (price) => {
    if (user.balance >= price) {
      setUser(prev => ({
        ...prev,
        balance: prev.balance - price,
        points: prev.points + 10 // Earn 10 points per coffee
      }));
    } else {
      alert("Insufficient funds! Top up your card.");
    }
  };

  return (
    <UserContext.Provider value={{ user, buyCoffee }}>
      {children}
    </UserContext.Provider>
  );
};