import React from 'react';
import classes from './SidebarItem.module.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ children, to, icon }) => {
  const pathname = useSelector((state) => state.router.location.pathname);
  const pathArr = pathname.split('/')
  let attachedClasses = [classes.DashItem].join('');
  // if (pathname === to) {
  if (!!pathArr.find(el => `/${el}` === to) || pathname === to) {
    attachedClasses = [classes.DashItem, classes.active].join(' ');
  }
  return (
    <li className={attachedClasses}>
      {icon && <i className={icon}></i>}

      <NavLink to={to}>
        <span
          style={{
            display: 'inline-block',
            width: '160px',
          }}
        >
          {children}
        </span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;
