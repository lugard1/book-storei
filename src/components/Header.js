import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Header = () => (
  <header>
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
      </div>
      <ul>
        <li>
          <Link to="/">BOOK</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div>
        <button type="button">
          <FaUser />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
