import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

const Navitem = ({intlId, children, to}) => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <li className={classes.NavItem}>
      <NavLink activeClassName={classes.active} exact to={to}>{f(intlId) || children}</NavLink>
    </li>
  );
};

export default Navitem;
