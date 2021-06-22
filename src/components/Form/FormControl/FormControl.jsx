import React from 'react';
import {
  FormControl as CFormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';

const FormControl = ({ className, error, touched, style,label,labelStyle,children,field }) => {
  return (
    <CFormControl
      style={{
        position: 'relative',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        ...style,
      }}
      my={7}
      isInvalid={error && touched}
      className={className}
    >
      {label && (
        <FormLabel style={labelStyle} htmlFor={field?.name}>
          {label}
        </FormLabel>
      )}
      {children}
      {error && touched && (
        <FormErrorMessage
          style={{ position: 'absolute', bottom: '-25px', left: '10px' }}
        >
          {error}
        </FormErrorMessage>
      )}
    </CFormControl>
  );
};

export default FormControl;
