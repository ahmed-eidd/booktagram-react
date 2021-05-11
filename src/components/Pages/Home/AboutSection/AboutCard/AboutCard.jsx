import React from 'react';
import classes from './AboutCard.module.scss';
import { useIntl } from 'react-intl';

const AboutCard = ({ title, des, iconClass }) => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.CardContainer}>
      <div className={classes.IconContainer}>
        <i className={iconClass}></i>
      </div>
      <h4>{f(title)}</h4>
      {/* {console.log(title)} */}
      <p className="text">{f(des)}</p>
    </div>
  );
};

export default AboutCard;
