import React from 'react';
import classes from './SingleMeeting.module.scss';
import Dots from '../../../../../components/Icons/Dots/Dots';
import cover from '../../../../../assests/bookcover.jpg';

const SingleMeeting = () => {
  return (
    <div className={classes.Meeting}>
      <div className={classes.Meeting__Cover}>
        <img src={cover} alt="book cover" />
      </div>
      <div className={classes.Meeting__Info}>
        <h3>Some Random Book</h3>
        <p>by : Robert T. Kiyosaki</p>
        <p>May 20th 2021 at 12:45 AM - 12:45 AM - EET (UTC+02:00)</p>
        <p>Online link</p>
        <p>Location</p>
      </div>
      <Dots />
    </div>
  );
};

export default SingleMeeting;
