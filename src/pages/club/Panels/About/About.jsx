import React from 'react';
import classes from './About.module.scss';

const About = () => {
  return (
    <>
      <h2 className={classes.About__Title}>lorem ipsum book club about</h2>
      <div className={classes.About__Text__Container}>
        <p className={classes.About__Text}>
          Excepteur sint occaecat cupidatat non sint proidenm sunt in culpa qui
          officia indese norunt mollit aim id est sint laborum sunt in culpa qui
          officia indese norunt ml aim id est sint laborumexcepteur sint
          occaecat cupidatat non sint proidenm sunt in culpa qui officia indese
          norunt mollit aim id est sint laborum sunt in culpa quiofficia indese
          norunt ml aim id est sint laborumexcepteur sint occaecat cupidatat non
          sint proidenm sunt in culpa qui officia indese norunt mollit aim id
          est sint laborum sunt in culpa qui officia indese norunt ml aim id est
          sint laborumexcepteur sint occaecat cupidatat non sint proidenm sunt
          in culpa qui officia indese norunt mollit aim id est sint laborum sunt
          in culpa qui officia indese norunt ml c est sint laborum sunt in culpa
          qui officia indese norunt ml aim czddid est sint laborum
        </p>
        <div className={classes.About__Categories}>
          <div className={classes.About__Category}>Fantasy</div>
          <div className={classes.About__Category}>Adenture</div>
          <div className={classes.About__Category}>Science ficiton</div>
        </div>
      </div>
    </>
  );
};

export default About;
