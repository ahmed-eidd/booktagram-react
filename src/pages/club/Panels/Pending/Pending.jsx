import React from 'react';
import classes from './Pending.module.scss';
import Avatar from '../../../../assests/avatar.jpg';

const Pending = () => {
  const onApproveHandler = () => {};
  const onDeleteHandler = () => {};
  const PendingPost = () => (
    <div className={classes.PendingPost}>
      <div className={classes.PendingPost__Img}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={classes.PendingPost__Btns}>
        <div className={classes.PendingPost__ApproveBtn} onClick={onApproveHandler}>Approve</div>
        <div className={classes.PendingPost__DeleteBtn} onClick={onDeleteHandler}>Delete</div>
      </div>
      <div className={classes.PendingPost__User}>
        <p className={classes.PendingPost__Name}>Ahmed Eid</p>
        <p className={classes.PendingPost__Date}>April 3 at 8:00 PM</p>
      </div>
      <p className={classes.PendingPost__Content}>
        aenean et tortor at risus viverra adipiscing at inaenean et tortor at
        risus viverra adipiscing at inaenean et tortor at risus viverra
        adipiscing at inaenean et tortor at risus viverra adipiscing at inaenean
        et tortor at risus viverra adipiscing at inaenean et tortor at risus
        viverra adipiscing at inaenean et tortor at risus viverra adipiscing at
        inaenean et tortor at risus viverra adipiscing at inAenean Et Tortor At
        Risus Viverra Adipiscing At Inaenean Et Tortor At Risus Viverra
      </p>
    </div>
  );
  return (
    <div className={classes.PendingPosts}>
      <PendingPost />
      <PendingPost />
      <PendingPost />
      <PendingPost />
    </div>
  );
};

export default Pending;
