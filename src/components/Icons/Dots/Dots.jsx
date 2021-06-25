import React from 'react';

const Dots = ({className,style,onClick}) => {
  return (
    <div onClick={onClick} style={style} className={className}>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
};

export default Dots;
