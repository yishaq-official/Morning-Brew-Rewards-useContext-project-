import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const items = [
  { id: 1, name: "Nitro Cold Brew", price: 4.50 },
  { id: 2, name: "Caramel Macchiato", price: 5.25 }
];

const CoffeeMenu = () => {
  const { buyCoffee, user } = useContext(UserContext);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Today's Menu</h3>
      {items.map(coffee => (
        <div key={coffee.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
          <h4>{coffee.name} - ${coffee.price}</h4>
          <button onClick={() => buyCoffee(coffee.price)}>Order & Earn Points</button>
        </div>
      ))}
      <hr />
      <h4>Your Loyalty Points: ⭐ {user.points}</h4>
    </div>
  );
};

export default CoffeeMenu;