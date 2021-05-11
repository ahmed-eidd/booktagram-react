import React from 'react';
import classes from './AboutSection.module.scss';
import { useIntl } from 'react-intl';
import AboutCard from './AboutCard/AboutCard';

const AboutSection = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.Container}>
      <h3 className={classes.AboutTitle}>{f('home_about_whoAreWe')}</h3>
      <div className={classes.CardsContainer}>
        <AboutCard
          title="home_about_card_title_1"
          des="home_about_card_text_1"
          iconClass="fas fa-shopping-cart"
        />
        <AboutCard
          title="home_about_card_title_2"
          des="home_about_card_text_2"
          iconClass="fas fa-calendar-day"
        />
        <AboutCard
          title="home_about_card_title_3"
          des="home_about_card_text_3"
          iconClass="fas fa-newspaper"
        />
        <AboutCard
          title="home_about_card_title_4"
          des="home_about_card_text_4"
          iconClass="fas fa-map-marked-alt"
        />
        <AboutCard
          title="home_about_card_title_5"
          des="home_about_card_text_5"
          iconClass="fas fa-book-reader"
        />
        <AboutCard
          title="home_about_card_title_6"
          des="home_about_card_text_6"
          iconClass="fas fa-user-friends"
        />
      </div>
    </div>
  );
};

export default AboutSection;
