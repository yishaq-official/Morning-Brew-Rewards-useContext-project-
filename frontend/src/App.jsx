import React from 'react';
import { UserProvider } from './UserContext';
import Navbar from './Navbar';
import CoffeeMenu from './CoffeeMenu';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <div className="content">
          <header style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>Start your morning right.</h1>
          </header>
          <CoffeeMenu />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;