import React from 'react';
import classes from './Memebers.module.scss';
import Avatar from '../../../../assests/avatar.jpg';
import { Flex } from '@chakra-ui/react';

const Memebers = () => {
  const Memeber = () => (
    <div className={classes.Memeber}>
      <div className={classes.Memeber__Img}>
        <img src={Avatar} alt="memeber" />
      </div>
      <div className={classes.Memeber__Info}>
        <Flex justifyContent="space-between" alignItems="center">
          <p className={classes.Memeber__Name}>Ahmed Eid</p>
          <div className={classes.Memeber__Setting}>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </Flex>
        <p className={classes.Memeber__Date}>Joined about 2 months ago</p>
        <Flex justifyContent="space-between" alignItems="center">
          <p className={classes.Memeber__Location}>Cairo, Egypt</p>
          <p className={classes.Memeber__Role}>Role</p>
        </Flex>
      </div>
    </div>
  );
  return (
    <div className={classes.Memebers}>
      <Memeber />
      <Memeber />
      <Memeber />
      <Memeber />
      <Memeber />
    </div>
  );
};

export default Memebers;
