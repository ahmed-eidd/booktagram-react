import React from 'react';
import ReactSelect from 'react-select';
import classes from './Select.module.scss';
import { useField } from 'formik';
import FormControl from '../FormControl/FormControl';

const Select = ({ label, labelStyle, placeholder, options,className, ...props }) => {
  const [field, { error, touched }, helpers] = useField(props);
  const { setValue } = helpers;
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : '';
  };
  // styles
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: '#E7FAFC',
      border: '2px solid #21545F',
      ':hover:': {
        ...styles[':hover:'],
        border: '1px solid red',
      },
    }),
    dropdownIndicator: (styles) => ({ ...styles, color: '#21545F' }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({ ...styles, backgroundColor: '#E7FAFC' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && '#21545F',
      color: isSelected && '#e7fafc',
      ':active': {
        ...styles[':active'],
        backgroundColor: '#21545F',
        color: '#E7FAFC',
      },
      ':hover': {
        ...styles[':active'],
        backgroundColor: '#21545F',
        color: '#E7FAFC',
      },
    }),
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles }),
  };

  return (
    <FormControl
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
    >
      <ReactSelect
        {...field}
        id={field.name}
        placeholder={placeholder}
        {...props}
        styles={colourStyles}
        onChange={(value) => {
          if (value === null) {
            setValue([]);
            return;
          }
          setValue(value.value);
        }}
        value={defaultValue(options, field.value)}
        options={options}
      ></ReactSelect>
    </FormControl>
  );
};

export default Select;
