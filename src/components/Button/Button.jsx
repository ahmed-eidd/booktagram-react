import React from 'react';
import { Link } from 'react-router-dom';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Button.module.scss';

const Button = ({
  children,
  type = 'button',
  to,
  isLoading,
  variant,
  onClick,
  style,
  className,
  ...props
}) => {
  // css classes
  // extendClasses(classes.btn, [classes.outline, className]);
  // extendClasses(classes.btn, [classes.filled, className]);
  const btnClass =
    variant === 'outline'
      ? extendClasses(classes.btn, [classes.outline, className])
      : extendClasses(classes.btn, [classes.filled, className]);

  return (
    <>
      {/* If Button is a Link */}

      {type === 'link' && (
        <Link to={to} className={btnClass} onClick={onClick} style={style}>
          {isLoading ? (
            <div className={classes.loader}>Loading...</div>
          ) : (
            children
          )}
        </Link>
      )}

      {/* if Button is an anchor */}

      {type === 'button' && (
        <button
          onClick={onClick}
          style={style}
          className={btnClass}
          type={type}
        >
          {isLoading ? (
            <div className={classes.loader}>Loading...</div>
          ) : (
            children
          )}
        </button>
      )}

      {type === 'submit' && (
        <button
          onClick={onClick}
          style={style}
          className={btnClass}
          type={type}
        >
          {isLoading ? (
            <div className={classes.loader}>Loading...</div>
          ) : (
            children
          )}
        </button>
      )}
      {type === 'underline' && (
        <div
          className={extendClasses(classes.underline, className)}
          onClick={onClick}
          style={style}
        >
          <i
            style={{
              marginRight: '.5rem',
            }}
            className='fas fa-plus-circle'
          ></i>
          <button>{children}</button>
        </div>
      )}
    </>
  );
};

export default Button;
