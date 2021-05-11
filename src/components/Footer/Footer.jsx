import React from 'react';
import classes from './Footer.module.scss';
import { useIntl } from 'react-intl';
import FooterLink from './FooterLink/FooterLink';
import { Input } from '@chakra-ui/react';
import Button from '../Button/Button';

const Footer = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterFirst}>
        <div className={classes.FooterAbout}>
          <h4>{f('footer_about_title')}</h4>
          <p>{f('footer_about_text')}</p>
        </div>
        <div className={classes.FooterQuickLinks}>
          <h4>{f('footer_quick_links_title')}</h4>
          <ul>
            {/* link container */}
            <FooterLink to="/"> {f('footer_quick_link_shop')} </FooterLink>
            <FooterLink to="/"> {f('footer_quick_link_guide')} </FooterLink>
            <FooterLink to="/"> {f('footer_quick_link_events')} </FooterLink>
            <FooterLink to="/"> {f('footer_quick_link_clubs')} </FooterLink>
            <FooterLink to="/"> {f('footer_quick_link_news')} </FooterLink>
            <FooterLink to="/"> {f('footer_quick_link_reviews')} </FooterLink>
          </ul>
        </div>

        <form action="" className={classes.FooterForm}>
          <h4>{f('footer_newsletter')}</h4>
          <Input placeholder="Enter Your Email" className={classes.Input}></Input>
          <Button variant="outline" style={{
            border: '1px solid #ffffff',
            borderRaduis: '50px',
            backgroundColor: '#ffffff',
          }} type="submit">{f('footer_btn')}</Button>
        </form>
      </div>
      <div>
        <div>terms</div>
        <div>all rights</div>
        <div>icons</div>
      </div>
    </div>
  );
};

export default Footer;
