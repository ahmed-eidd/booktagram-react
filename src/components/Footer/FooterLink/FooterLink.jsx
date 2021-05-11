import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default FooterLink;
