import React from 'react';
import classes from './Radio.module.scss';
import { Radio as ChakraRadio } from '@chakra-ui/react';

const Radio = ({ children, value }) => {
  return (
    <ChakraRadio
      size='lg'
      className={classes.Radio}
      value={value}
    >
      {children}
    </ChakraRadio>
  );
};

export default Radio;
