import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
      <Link to="/watched">Watched</Link>
    </nav>
  );
};

export default NavBar;
