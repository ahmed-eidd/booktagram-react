import { Checkbox as CharkaCheckbox } from '@chakra-ui/checkbox';
import { Text } from '@chakra-ui/layout';
import { Field } from 'formik';
import React from 'react';

const Checkbox = ({ name, children, checked , className}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <CharkaCheckbox
          defaultChecked={checked}
          iconColor="#21545F"
          colorScheme="white"
          style={{
            borderColor: '#21545F',
          }}
          id={name}
          name={name}
          onChange={(e) => {
            form.setFieldValue(name, e.target.checked);
          }}
          className={className}
        >
          <Text fontSize="sm" textAlign="left">
            {children}
          </Text>
        </CharkaCheckbox>
      )}
    </Field>
  );
};

export default Checkbox;
