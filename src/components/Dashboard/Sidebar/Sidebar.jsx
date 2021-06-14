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
      <div className={classes.Avatar}>
        {profile.firstName && profile.lastName
          ? profile.firstName + ' ' + profile.lastName
          : 'John Doe'}
      </div>
      <div className={classes.Links}>
        <ul className={classes.DashList}>
          <SidebarItem to="/" icon='fas fa-home'>
            {f('nav_home')}
          </SidebarItem>
          <SidebarItem to="/profile" icon="fas fa-user">
            {f('nav_profile')}
          </SidebarItem>
          <SidebarItem to="/mybooks" icon="fas fa-book">
        
            {f('nav_mybooks')}
          </SidebarItem>
          <SidebarItem to="/clubs" icon="fas fa-users">
            {f('nav_club')}
          </SidebarItem>
          <SidebarItem to="/shop" icon="fas fa-shopping-cart">
            {f('nav_shop')}
          </SidebarItem>
          <SidebarItem to="/events" icon="fas fa-calendar-day">
            {f('nav_events')}
          </SidebarItem>
          <SidebarItem to="/guide" icon="fas fa-book-open">
            {f('nav_guide')}
          </SidebarItem>
          <SidebarItem to="/news" icon="fas fa-newspaper">
            {f('nav_news')}
          </SidebarItem>
          <SidebarItem to="/message" icon="far fa-envelope">
            {f('nav_message')}
          </SidebarItem>

          <SidebarItem to="/accountsetting" icon="fas fa-cog">
            {f('nav_accountSetting')}
          </SidebarItem>
          <SidebarItem to="/logout" icon="fas fa-sign-out-alt">
            {f('nav_logout')}
          </SidebarItem>
         
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
