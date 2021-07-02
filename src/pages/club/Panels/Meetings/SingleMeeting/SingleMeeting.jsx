import React from 'react';
import classes from './SingleMeeting.module.scss';
import Dots from '../../../../../components/Icons/Dots/Dots';
import cover from '../../../../../assests/bookcover.jpg';

const SingleMeeting = () => {
  const iconStyle = {
    marginRight: '.5rem',
  };
  return (
    <div className={classes.Meeting}>
      <div className={classes.Meeting__Cover}>
        <img src={cover} alt='book cover' />
      </div>
      <div className={classes.Meeting__Info}>
        <h3 className={classes.Meeting__Info__Title}>Some Random Book</h3>
        <p className={classes.Meeting__Info__Author}>by : Robert T. Kiyosaki</p>
        <p className={classes.Meeting__Info__Date}>
          <i class='fas fa-map-marker-alt' style={iconStyle}></i>May 20th 2021
          at 12:45 AM - 12:45 AM - EET (UTC+02:00)
        </p>
        <p className={classes.Meeting__Info__Type}>
          <i class='fas fa-link' style={iconStyle}></i>Online link
        </p>
        <p className={classes.Meeting__Info__Location}>
          <i class='fas fa-map-marker-alt' style={iconStyle}></i>Location
        </p>
        <p className={classes.Meeting__Info__Description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
          feugiat vivamus. Tellus in hac habitasse platea dictumst vestibulum
          rhoncus. Mollis nunc sed id semper risus in hendrerit. Morbi tempus
          iaculis urna id volutpat lacus laoreet. Cras ornare
        </p>
      </div>
      <Dots />
    </div>
  );
};

export default SingleMeeting;
