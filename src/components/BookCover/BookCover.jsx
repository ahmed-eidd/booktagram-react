import React from 'react';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './BookCover.module.scss';

const BookCover = ({ cover, title, author, date, children, className }) => {
  return (
    <div className={extendClasses(classes.Book, className)}>
      <div className={classes.Book__Cover}>
        <img src={cover} alt='book cover' />
      </div>
      <div className={classes.Book__Info}>
        <h3 className={classes.Book__Info__Title}>{title}</h3>
        <p className={classes.Book__Info__Author}>{author}</p>
        <p className={classes.Book__Info__Date}>{date}</p>
      </div>
      {children}
    </div>
  );
};

export default BookCover;
