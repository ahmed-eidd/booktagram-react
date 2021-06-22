import React from 'react';
import ReactSelect from 'react-select';
import classes from './MultiSelect.module.scss';
import { useField } from 'formik';
import FormControl from '../FormControl/FormControl';

const MultiSelect = ({
  label,
  labelStyle,
  placeholder,
  options,
  className,
  ...props
}) => {
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
      border: '2px solid #21545F ',
      ':hover:': {
        border: '2px solid #21545F ',
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
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: '#E7FAFC',
        border: '1px solid #21545F',
        borderRadius: '5px',
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: '#21545F',
    }),
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
        isMulti={true}
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
          setValue(value.map((v) => v.value));
        }}
        value={defaultValue(options, field.value)}
        options={options}
      ></ReactSelect>
    </FormControl>
  );
};

export default MultiSelect;
