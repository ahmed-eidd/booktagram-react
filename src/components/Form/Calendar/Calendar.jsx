import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import classes from './Calendar.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import FormControl from '../FormControl/FormControl';
import { useField, useFormikContext } from 'formik';

const FormCalendar = ({ className, label, labelStyle, style, ...props }) => {
  // const [date, setDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type='button'
      className={classes.Calendar__Input}
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  const [field, { error, touched }] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <FormControl
      className={className}
      error={error}
      touched={touched}
      label={label}
      labelStyle={labelStyle}
      field={field}
      style={style}
    >
      <div className={classes.Calendar}>
        <DatePicker
          {...props}
          {...field}
          customInput={<CustomInput />}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
          wrapperClassName={classes.CalendarWrapper}
        />
        <div className={classes.Calendar__Icon}>
          <i className='far fa-calendar-alt'></i>
        </div>
      </div>
    </FormControl>
  );
};

export default FormCalendar;
