import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: 'home',
      text: 'Home',
    },
    {
      id: 2,
      path: 'calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: 'quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Mathemagics</h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
