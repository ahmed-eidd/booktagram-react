import React from 'react';
import ReactSelect from 'react-select';
import classes from './Select.module.scss';
import { useField } from 'formik';
import { colors } from '../../../styles/abstract/colors';
import FormControl from '../FormControl/FormControl';

const Select = ({ label, labelStyle, placeholder, options,className, ...props }) => {
  const [field, { error, touched }, helpers] = useField(props);
  const { setValue } = helpers;
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : '';
  };

  const {grey,secondary,primary} = colors
  // styles
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:secondary ,
      border: `2px solid ${grey}`,
      ':hover:': {
        ...styles[':hover:'],
        border: `1px solid ${grey}`,
      },
    }),
    dropdownIndicator: (styles) => ({ ...styles, color: grey }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({ ...styles, backgroundColor:secondary }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && grey,
      color: isSelected &&secondary,
      ':active': {
        ...styles[':active'],
        backgroundColor: grey,
        color: secondary,
      },
      ':hover': {
        ...styles[':active'],
        backgroundColor:grey,
        color: secondary,
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
