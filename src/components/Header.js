import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import classNames from './Header.module.css';

const Header = () => (
  <header className={classNames.header}>
    <nav className={classNames.navigator}>
      <div>
        <h1 className={classNames.header_text}>Bookstore CMS</h1>
      </div>
      <ul className={classNames.nav_Links}>
        <li className={classNames.books}>
          <NavLink to="/">BOOK</NavLink>
        </li>
        <li className={classNames.categories}>
          <NavLink to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
      <div className={classNames.oval}>
        <button type="button" className={classNames.avatarBtn}>
          <FaUser />
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
