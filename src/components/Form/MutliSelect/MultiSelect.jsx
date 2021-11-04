import React from 'react';
import ReactSelect from 'react-select';
import { useField } from 'formik';
import FormControl from '../FormControl/FormControl';
import { colors } from '../../../styles/abstract/colors';

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

  const { grey, secondary } = colors;

  // styles
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: secondary,
      border: `2px solid ${grey}`,
      ':hover:': {
        border: `2px solid ${grey} `,
      },
    }),
    dropdownIndicator: (styles) => ({ ...styles, color: grey }),
    indicatorSeparator: (styles) => ({ display: 'none' }),
    menu: (styles) => ({ ...styles, backgroundColor: secondary }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected && grey,
      color: isSelected && grey,
      ':active': {
        ...styles[':active'],
        backgroundColor: grey,
        color: secondary,
      },
      ':hover': {
        ...styles[':active'],
        backgroundColor: grey,
        color: secondary,
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
