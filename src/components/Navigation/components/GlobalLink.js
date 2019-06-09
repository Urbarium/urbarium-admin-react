import React from 'react';
import { Link } from 'react-router-dom';

const GlobalLink = ({
  className, to, onClick, children,
}) => (
  <Link className={className} to={to} onClick={onClick}>
    {children}
  </Link>
);

export default GlobalLink;
