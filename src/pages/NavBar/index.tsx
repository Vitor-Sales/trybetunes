import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Login</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/album/:id">Album</NavLink>
    </nav>
  );
}

export default NavBar;
