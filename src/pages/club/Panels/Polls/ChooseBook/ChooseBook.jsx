import { Flex } from '@chakra-ui/react';
import React from 'react';
import Dots from '../../../../../components/Icons/Dots/Dots';
import classes from './ChooseBook.module.scss';
import BookCover from '../../../../../components/BookCover/BookCover';
import cover from '../../../../../assests/bookcover.jpg';
import Button from '../../../../../components/Button/Button';

const ChooseBook = ({ title }) => {
  const voteBtnStyle = {
    width: '100%',
    margin: '.5rem 0',
  };
  return (
    <div className={classes.ChooseBook}>
      <Flex
        style={{ marginBottom: '1rem' }}
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <div className={classes.ChooseBook__Info}>
          <h2 className={classes.ChooseBook__Info__Title}>Book Of The Month</h2>
          <p className={classes.ChooseBook__Info__Date}>Ends in 09 Apr 2021</p>
        </div>
        <Dots />
      </Flex>
      <div className={classes.ChooseBook__Content}>
        <Flex justifyContent='space-between' alignItems='center'>
          <BookCover
            cover={cover}
            title='Rich Dad , Poor Dad'
            author='by : Robert T. Kiyosaki'
          >
            <Button style={voteBtnStyle}>VOTE</Button>
          </BookCover>
          <BookCover
            cover={cover}
            title='Rich Dad , Poor Dad'
            author='by : Robert T. Kiyosaki'
          >
            <Button style={voteBtnStyle}>VOTE</Button>
          </BookCover>
          <BookCover
            cover={cover}
            title='Rich Dad , Poor Dad'
            author='by : Robert T. Kiyosaki'
          >
            <Button style={voteBtnStyle}>VOTE</Button>
          </BookCover>
          <BookCover
            cover={cover}
            title='Rich Dad , Poor Dad'
            author='by : Robert T. Kiyosaki'
          >
            <Button style={voteBtnStyle}>VOTE</Button>
          </BookCover>
        </Flex>
      </div>
    </div>
  );
};

export default ChooseBook;
