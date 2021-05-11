import React from 'react'
import classes from './Card.module.scss';

const CardsContainer = ({children}) => {
  return (
    <div className={classes.CardsContainer}>
      {children}
    </div>
  )
}

export default CardsContainer
