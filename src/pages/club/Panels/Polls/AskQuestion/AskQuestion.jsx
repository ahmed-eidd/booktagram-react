import React from 'react';
import classes from './AskQuestion.module.scss';
import { Flex } from '@chakra-ui/react';
import Button from '../../../../../components/Button/Button';
import Dots from '../../../../../components/Icons/Dots/Dots';

const AskQuestion = () => {
  return (
    <div className={classes.AskQuestion}>
      <Flex
        style={{ marginBottom: '1rem' }}
        justifyContent='space-between'
        alignItems='flex-start'
      >
        <div className={classes.AskQuestion__Info}>
          <h2 className={classes.AskQuestion__Info__Title}>Meeting Time</h2>
          <p className={classes.AskQuestion__Info__Date}>Ends in 09 Apr 2021</p>
        </div>
        <Dots />
      </Flex>
      <div className={classes.AskQuestion__Content}>
        <div className={classes.AskQuestion__Content__Question}>
          <p className={classes.AskQuestion__Content__Question__Text}>
            May 20th 2021 at 12:45 AM - 12:45 AM - EET (UTC+02:00)
          </p>
          <Flex width='15%' justifyContent='space-between' alignItems='center'>
            <Button style={{ marginRight: '1rem' }}>Yes</Button>
            <Button variant='outline'>No</Button>
          </Flex>
        </div>
        <div className={classes.AskQuestion__Content__Question}>
          <p className={classes.AskQuestion__Content__Question__Text}>
            May 20th 2021 at 12:45 AM - 12:45 AM - EET (UTC+02:00)
          </p>
          <Flex width='15%' justifyContent='space-between' alignItems='center'>
            <Button style={{ marginRight: '1rem' }}>Yes</Button>
            <Button variant='outline'>No</Button>
          </Flex>
        </div>
        <div className={classes.AskQuestion__Content__Question}>
          <p className={classes.AskQuestion__Content__Question__Text}>
            May 20th 2021 at 12:45 AM - 12:45 AM - EET (UTC+02:00)
          </p>
          <Flex width='15%' justifyContent='space-between' alignItems='center'>
            <Button style={{ marginRight: '1rem' }}>Yes</Button>
            <Button variant='outline'>No</Button>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default AskQuestion;
