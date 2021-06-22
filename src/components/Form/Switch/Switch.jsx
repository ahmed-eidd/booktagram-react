import React from 'react';
import classes from './Switch.module.scss';
import {
  Switch as ChakraSwitch
} from '@chakra-ui/react';
import { useField } from 'formik';
import FormControl from '../FormControl/FormControl';

const Switch = ({
  labelStyle,
  label,
  placeholder,
  className,
  style,
  subLabel,
  ...props
}) => {
  const [field, { error, touched }] = useField(props);
  return (
    <FormControl
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
    >
      <ChakraSwitch
        size="lg"
        {...field}
        colorScheme="teal"
        id={field.name}
        placeholder={placeholder}
        className={[classes.Switch, className].join(' ')}
        value={field.value}
        isChecked={field.value}
      />
    </FormControl>
  );
};

export default Switch;
