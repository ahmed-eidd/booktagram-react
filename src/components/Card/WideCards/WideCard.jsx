import React from 'react';
import classes from './WideCard.module.scss';



const WideCard = () => {
  return (
    <div className={classes.WideCard}>
      <div className={classes.ImgContainer}>
        <img
          src="/assests/news/Background.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classes.TextContainer}>
        <h3>Diwan Bookstore</h3>
        <p className={classes.des}>The BA Bookshop provides a wide variety of products, Egyptian handicrafts, and books from well-known national and international publishers, including AUC Press, targeting both Egyptians and non-Egyptians, focusing on promoting the Library, Alexandria, and Egypt.</p>
        <p>
         <span> Location:</span> Chatby, Alexandria 21526, Egypt
        </p>
        <p> <span>
          Working Hours:
         </span>
            11:00 am – 7:00 pm Sunday through Thursday; 12:00 pm to 4:00 pm on
            Saturday; closed on Friday
          
        </p>
        <p>
         <span> Phone:</span> 20.3.4839.999 Ext:1562
        </p>
        <p>
        <span>  Email:</span> khaled.elkordy@bibalex.org
        </p>
        <p>
        <span> Website:</span>www.bibalex.org
        </p>
      </div>
    </div>
  );
};

export default WideCard;
