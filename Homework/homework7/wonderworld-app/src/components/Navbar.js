import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-logo">WonderWorld</h1>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/space" 
              className={`nav-link ${location.pathname === '/space' ? 'active' : ''}`}
            >
              Space Wonders
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/ocean" 
              className={`nav-link ${location.pathname === '/ocean' ? 'active' : ''}`}
            >
              Ocean Mysteries
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;