import React from 'react';
import { useField } from 'formik';
import {
  // FormControl,
  // FormLabel,
  // FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import FormControl from '../FormControl/FormControl';
import classes from './InputField.module.scss';

const InputField = ({
  labelStyle,
  label,
  placeholder,
  type,
  className,
  style,
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
      <Input
        {...field}
        id={field.name}
        type={type}
        placeholder={placeholder}
        style={{
          borderColor: error && '#E53E3E',
        }}
        className={[
          error ? [classes.Input, classes.InputError].join(' ') : classes.Input,
          className,
        ].join(' ')}
      />
    </FormControl>
  );
};

export default InputField;
