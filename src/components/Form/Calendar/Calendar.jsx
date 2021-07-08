import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import classes from './Calendar.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

const FormCalendar = ({ onChange, value }) => {
  const [date, setDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={classes.Calendar__Input} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className={classes.Calendar}>
      <DatePicker
        customInput={<CustomInput />}
        selected={date}
        onChange={(date) => setDate(date)}
        wrapperClassName={classes.CalendarWrapper}
      />
      <div className={classes.Calendar__Icon}>
        <i className='far fa-calendar-alt'></i>
      </div>
    </div>
  );
};

export default FormCalendar;
