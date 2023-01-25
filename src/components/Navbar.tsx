import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <ul>
          <li className='navbar-item is-inline-block'>
            <Link to="/">Fibonacci Sequence</Link>
          </li>
          <li className='navbar-item is-inline-block'>
            <Link to="/collatz">Collatz Conjecture</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
