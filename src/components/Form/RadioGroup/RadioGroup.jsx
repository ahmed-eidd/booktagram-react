import React from 'react';
import classes from './RadioGroup.module.scss';
import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';

const RadioGroup = ({ value, children, title, onChange, ...props }) => {
  return (
    <ChakraRadioGroup
      className={classes.RadioGroup}
      value={value}
      onChange={onChange}
    >
      {title && <h3 className={classes.RadioGroup__Title}>{title}</h3>}
      {children}
    </ChakraRadioGroup>
  );
};

export default RadioGroup;
