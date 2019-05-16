import React from 'react';
import { Link } from 'react-router-dom';


export const GlobalLink = ({ className, to, onClick, children }: any) => {
  return (
    <Link className={className} to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

export default GlobalLink;