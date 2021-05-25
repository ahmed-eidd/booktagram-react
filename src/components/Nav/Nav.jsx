import React, { useEffect, useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { Select } from '@chakra-ui/react';
import Button from '../Button/Button';
import LoginModal from '../LoginModal/LoginModal';

const Nav = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const [scrollDir, setScrollDir] = useState('scrolling up');
  const [scrolling, setScrolling] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [tab, setTab] = useState('');

  const signUpOpen = () => {
    setModalOpen(true);
    setTab('signup');
  };

  const signInOpen = () => {
    setModalOpen(true);
    setTab('signin');
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up');
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (window.pageYOffset === 0) {
        setScrolling(false);
      } else {
        setScrolling(true);
      }
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    // console.log(scrollDir);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div
      className={
        !scrolling
          ? classes.container
          : [classes.container, classes.scroll].join(' ')
      }
      style={{
        transform:
          scrollDir === 'scrolling up' ? 'translateY(0)' : 'translateY(-100vh)',
      }}
    >
      <Link to="/" className={classes.logo}>
        Booktagram
      </Link>
      <div className={classes.navItems}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/">{f('nav_home')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/news">{f('nav_news')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/events">{f('nav_events')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/shop">{f('nav_shop')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/clubs">{f('nav_club')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/guide">{f('nav_guide')}</Link>
          </li>
          <li className={classes.navItem}>
            <Link to="/about">{f('nav_about')}</Link>
          </li>{' '}
          <li className={classes.navItem}>
            <Link to="/contactus">{f('nav_contactus')}</Link>
          </li>
        </ul>
      </div>

      <LoginModal open={modalOpen} close={onModalClose} tab={tab} />

      <div className={classes.navBtns}>
        <Button style={{ marginRight: '5px' }} onClick={signUpOpen}>
          {f('nav_signup')}
        </Button>
        <Button variant="outline" onClick={signInOpen}>
          {f('nav_login')}
        </Button>
        <Select
          defaultValue={'en'}
          className={classes.langSelect}
          isFullWidth={false}
          colorScheme="green"
          style={{ border: 'none', fontWeight: 'bold' }}
          size="sm"
          width="auto"

          // onChange={(e) => {
          //   console.log(e.target.value);
          //   const path = router.pathname;

          //   router.push(`${lang}`);
          //   // router.reload()
          // }}
        >
          <option value="ar">AR</option>
          <option value="en">EN</option>
        </Select>
      </div>
    </div>
  );
};

export default Nav;
