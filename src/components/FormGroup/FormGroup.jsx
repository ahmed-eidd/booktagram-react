import React from 'react';
import { Form } from 'formik';
import { Container } from '@chakra-ui/react';
import classes from './FormGroup.module.scss'

const FormGroup = ({ children, title }) => {
  return (
  <div className={classes.container}>
    
    <h1 className={classes.title}>{title}</h1>

    <Form style={{width: '100%'}} noValidate>{children}</Form>
  </div>
  
  );
};

export default FormGroup;
