import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li>
          <Link to="/user">
            User Home
          </Link>
        </li>
        <li>
          <Link to="/info">
            Info Page
          </Link>
        </li>
        <li>
          <Link to="/add">
          Add Item
        </Link>
        </li>
        <li>
          <Link to="/view">
            View Shelf
          </Link>
        </li>
        <li>
          <Link to="/stats">
            Stats
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Nav;
