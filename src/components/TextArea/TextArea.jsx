import React from 'react';
import { Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import classes from './TextArea.module.scss';

const GroupPost = ({ className,name, type, placeholder, ...props }) => {
  // const [field, { error, touched }] = useField(props);
  return (
    <Textarea
      className={[classes.TextArea, className].join(' ')}
      {...props}
      resize="none"
      type={type}
      placeholder={placeholder}
      id={name}
      name={name}
      // {...field}
    ></Textarea>
  );
};

export default GroupPost;
