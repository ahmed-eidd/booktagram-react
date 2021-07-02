import React from 'react';
import classes from './Dots.module.scss';

const Dots = ({ className, style, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={style}
      className={[classes.Dots, className].join(' ')}
    >
      <i className='fas fa-ellipsis-h'></i>
    </div>
  );
};

export default Dots;
