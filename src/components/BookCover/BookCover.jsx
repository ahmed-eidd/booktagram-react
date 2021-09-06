import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './BookCover.module.scss';

const BookCover = ({ cover, title, author, date, price, location , children, onClick, hoverOn, className }) => {
  return (
    <div className={extendClasses(classes.Book, hoverOn && classes.HoverOn, className)} onClick={onClick}>
      <div className={classes.Book__Cover}>
        <img src={cover} alt='book cover' />
      </div>
      <div className={classes.Book__Info}>
        <h3 className={classes.Book__Info__Title}>{title}</h3>
        <p className={classes.Book__Info__Author}> <span>by:</span> {author}</p>
        <p className={classes.Book__Info__Date}>{date}</p>
        <p className={classes.Book__Info__Price}>{price}</p>
        <p className={classes.Book__Info__Location}>{location}</p>
      </div>
      {children}
    </div>
  );
};

export default BookCover;
