import { useState } from 'react';
import { UserContext } from './UserContext';
import Header from 'Header';


const [user, setUser] = useState({
  name: 'Yishaq',
  points: 1000
});

function App() {
  

  return (
    <UserContext.Provider value={user}>
      <h1>Morning Brew Rewards</h1>

        <Header />
    </UserContext.Provider>
  )
}

export default App
