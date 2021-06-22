import React from 'react';
import {
  Textarea,
} from '@chakra-ui/react';
import { useField } from 'formik';
import classes from './TextArea.module.scss';
import FormControl from '../FormControl/FormControl';

const GroupPost = ({
  label,
  labelStyle,
  textAreaStyle,
  className,
  type,
  placeholder,
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
  
      
      <Textarea
        style={textAreaStyle}
        {...field}
        id={field.name}
        resize="none"
        type={type}
        placeholder={placeholder}
        className={[classes.TextArea, className].join(' ')}
      />
   
    </FormControl>
  );
};

export default GroupPost;
