import React from 'react';
import classes from './CurrentlyReading.module.scss';
import cover from '../../../../assests/bookcover.jpg';

const CurrentlyReading = () => {
  const SmallBook = () => (
    <div className={classes.CurrentlyReading__OldBooks__Book}>
      <div className={classes.CurrentlyReading__OldBooks__Book__Cover}>
        <img src={cover} alt="book cover" />
      </div>
      <div className={classes.CurrentlyReading__OldBooks__Book__Info}>
        <h3 className={classes.CurrentlyReading__OldBooks__Book__Info__Title}>
          Rich Dad , Poor Dad
        </h3>
        <p className={classes.CurrentlyReading__OldBooks__Book__Info__Author}>
          by : Robert T. Kiyosaki
        </p>
        <p className={classes.CurrentlyReading__OldBooks__Book__Info__Date}>
          on April 2021
        </p>
      </div>
    </div>
  );
  return (
    <div className={classes.CurrentlyReading}>
      <h2 className={classes.CurrentlyReading__BookOfMonth__Title}>
        Book of the month
      </h2>
      <div className={classes.CurrentlyReading__BookOfMonth}>
        <div className={classes.CurrentlyReading__BookOfMonth__Cover}>
          <img src={cover} alt="book cover" />
        </div>
        <div className={classes.CurrentlyReading__BookOfMonth__Info}>
          <h3 className={classes.CurrentlyReading__BookOfMonth__Info__Title}>
            Rich Dad , Poor Dad
          </h3>
          <p className={classes.CurrentlyReading__BookOfMonth__Info__Author}>
            by : Robert T. Kiyosaki
          </p>
          <p
            className={classes.CurrentlyReading__BookOfMonth__Info__Description}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pellentesque elit ullamcorper dignissim cras tincidunt lobortis
            feugiat vivamus. Tellus in hac habitasse platea dictumst vestibulum
            rhoncus. Mollis nunc sed id semper risus in hendrerit. Morbi tempus
            iaculis urna id volutpat lacus laoreet. Cras ornare
          </p>
        </div>
      </div>
      <h2 className={classes.CurrentlyReading__OldBooks__Title}>
        Previous Books
      </h2>
      <div className={classes.CurrentlyReading__OldBooks}>
        <SmallBook />
        <SmallBook />
        <SmallBook />
        <SmallBook />
        <SmallBook />
      </div>
    </div>
  );
};

export default CurrentlyReading;
