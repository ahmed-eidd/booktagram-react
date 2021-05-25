import React from 'react';
import Button from '../Button/Button';
import classes from './Card.module.scss';
import Img from '../../assests/news/Background.jpg';


const Card = ({ subTitle, title, text, btn }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Date}>
        <p>14</p>
        <p>Mar</p>
      </div>
      <div className={classes.CardImg}>
        <img
        src={Img}
        alt='card img'
        />
      </div>
      <div className={classes.CardInfo}>
        <h6 className={classes.SubTitle}>Category Name | March14, 2021</h6>
        <h5 className={classes.Title}>
          Lorem ipsum dolor sit amet, dolea consectetur.
        </h5>
        <p className={classes.Text}>
          Excepteur sint occaecat cupidatat non sint proident, sunt in culpa qui
          officia indese no runt mollit aim id est sint laborum.
        </p>
        <Button type="link" to="#">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Card;
