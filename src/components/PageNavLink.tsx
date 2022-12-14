import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  to: string;
  text: string;
};

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) => classNames('navbar-item',
      { 'is-active': isActive }
    )}
    style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
    end
  >
    {text}
  </NavLink>
);
