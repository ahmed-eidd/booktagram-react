import React from 'react'
import classes from './ListItem.module.scss';

const ListItem = ({children,onDelete,onEdit}) => {
  return (
    <div className={classes.ListItem}>
      <p className={classes.ListItem__Text}>{children}</p> 
      <div onClick={onDelete} className={classes.ListItem__Icon}><i className="fas fa-trash-alt"></i></div>
    </div>
  )
}

export default ListItem
