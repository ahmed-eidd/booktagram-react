import React from 'react';
import classes from './Comment.module.scss';
import Avatar from '../../../../../assests/avatar.jpg';

const Comment = () => {
  return (
    <div className={classes.Comment}>
      <div className={classes.Comment__Avatar}>
        <img src={Avatar} alt="comment avatar" />
      </div>
      <div className={classes.Comment__Content}>
        <p className={classes.Comment__Name}>Ibrahim Magdy</p>
        <p className={classes.Comment__Text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic
          architecto saepe, laboriosam consequuntur nihil quis aspernatur iure
          distinctio nulla!
        </p>
        <div className={classes.Comment__Like}>Like</div>
        <p className={classes.Comment__Date}>1h ago</p>
      </div>
    </div>
  );
};

export default Comment;
