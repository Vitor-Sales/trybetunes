import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="navbar" data-testid="header-component">
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="profile">Profile</NavLink>
    </header>
  );
}

export default Header;
