import React from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';
import classes from './InputField.module.scss';

const InputField = ({ label, placeholder, type, ...props }) => {
  const [field, { error, touched }] = useField(props);

  return (
    <FormControl
      style={{
        position: 'relative',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
      }}
      my={7}
      isInvalid={error && touched}
    >
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <Input
        {...field}
        id={field.name}
        type={type}
        placeholder={placeholder}
        className={classes.Input}
      />
      {error && touched && (
        <FormErrorMessage
          style={{ position: 'absolute', bottom: '-25px', left: '10px' }}
        >
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default InputField;
