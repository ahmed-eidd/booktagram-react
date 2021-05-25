import React from 'react';
import classes from './Sidebar.module.scss';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../../store/auth/slice';
import SidebarItem from '../SidebarItem/SidebarItem';
import Button from '../../Button/Button';

const Sidebar = () => {
  const profile = useSelector((state) => state.firebase.profile);
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Avatar}>{profile.firstName && profile.lastName ? profile.firstName + ' ' + profile.lastName : 'John Doe'}</div>
      <div className={classes.Links}>
        <ul className={classes.DashList}>
          <SidebarItem to="/">{f('nav_home')}</SidebarItem>
          <SidebarItem to="/news">{f('nav_news')}</SidebarItem>
          <SidebarItem to="/events">{f('nav_events')}</SidebarItem>
          <SidebarItem to="/shop">{f('nav_shop')}</SidebarItem>
          <SidebarItem to="/clubs">{f('nav_club')}</SidebarItem>
          <SidebarItem to="/guide">{f('nav_guide')}</SidebarItem>
          <SidebarItem to="/about">{f('nav_about')}</SidebarItem>
          <SidebarItem to="/contactus">{f('nav_contactus')}</SidebarItem>
          <Button
            style={{ margin: '15px auto', border: '1px solid white' }}
            onClick={() => dispatch(signOut())}
          >
            Log Out
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
