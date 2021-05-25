import React from 'react'
import classes from './SidebarItem.module.scss';
import { useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { useIntl } from 'react-intl';

const SidebarItem = ({children,to}) => {
  const pathname = useSelector((state) => state.router.location.pathname); 
  let attachedClasses = [classes.DashItem].join('');
  if (pathname === to) {
    attachedClasses = [classes.DashItem, classes.active].join(' ')
  }
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
  
  <li className={attachedClasses}>
    <NavLink to={to}>{children}</NavLink>
  </li>    
  )
}

export default SidebarItem
