import { NavLink } from 'react-router-dom';
import './header.css';
import { useEffect, useState } from 'react';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';

function Header() {
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<UserType | undefined>();
  const showUser = async () => {
    setLoading(true);
    const name = await getUser();
    setUserName(name);
    setLoading(false);
  };

  useEffect(() => {
    showUser();
  }, []);

  return (
    <>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <header className="navbar" data-testid="header-component">
          <NavLink data-testid="link-to-search" to="/search">Search</NavLink>
          <NavLink data-testid="link-to-favorites" to="/favorites">Favorites</NavLink>
          <NavLink data-testid="link-to-profile" to="/profile">Profile</NavLink>
          <p data-testid="header-user-name">{userName.name}</p>
        </header>
      )}
    </>
  );
}

export default Header;
