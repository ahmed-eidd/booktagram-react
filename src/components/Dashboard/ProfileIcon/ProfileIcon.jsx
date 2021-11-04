import React from 'react';
import classes from './ProfileIcon.module.scss';
import Avatar2 from '../../../assests/avatar.jpg';
import { useSelector } from 'react-redux';

const ProfileIcon = ({ name }) => {
  const profile = useSelector((state) => state.firebase.profile);
  return (
    <div className={classes.ProfileIcon}>
      <div className={classes.ProfileIcon__Img}>
        <img src={Avatar2} alt='account profile img' />
      </div>
      <p className={classes.ProfileIcon__Name}>
        {profile.firstName && profile.lastName
          ? profile.firstName + ' ' + profile.lastName
          : 'John Doe'}
      </p>
    </div>
  );
};

export default ProfileIcon;
