import {useContext} from 'react';
import { UserContext } from './UserContext';

function Header() {

    const user = useContext(UserContext);
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>You have {user.points} points.</p>
    </div>
  )
}

export default Header
