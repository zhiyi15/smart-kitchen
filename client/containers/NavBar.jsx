import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <h1> Smart Kitchen</h1>
        <div className="links">
          <Link
            className="link-nav"
            to="/"
          >
            Home
          </Link>
          <a
          id='cart'
            className="link-nav"
            href="https://www.instacart.com/"
          >
            Shopping Cart
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
