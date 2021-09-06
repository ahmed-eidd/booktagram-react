import React, { useEffect, useState } from 'react';
import classes from './Nav.module.scss';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Select } from '@chakra-ui/react';
import {setAuthModalOpen} from '../../store/auth/action';
import {useDispatch} from 'react-redux';
import LoginModal from '../LoginModal/LoginModal';
import Button from '../Button/Button';
import Logo from '../../assests/logo.png';
import Navitem from './NavItem/NavItem';


const SIGN_IN = 'signin';
const SIGN_UP = 'signup'


const Nav = () => {
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  const dispatch = useDispatch();
  const [scrollDir, setScrollDir] = useState('scrolling up');
  const [scrolling, setScrolling] = useState(false);

  const signUpOpen = () => {
    dispatch(setAuthModalOpen(SIGN_UP));
  };

  const signInOpen = () => {
    dispatch(setAuthModalOpen(SIGN_IN))
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
      <Link to="/" className={classes.Logo}>
        {/* Booktagram Logo */}
        <img src={Logo} alt="logo" className={classes.LogoImg}/>
      </Link>
      <div className={classes.navItems}>
        <ul className={classes.navList}>
          <Navitem to='/' intlId='nav_home' />
          <Navitem to='/news' intlId='nav_news' />
          <Navitem to='/events' intlId='nav_events' />
          <Navitem to='/shop' intlId='nav_shop' />
          <Navitem to='/clubs' intlId='nav_club' />
          <Navitem to='/guide' intlId='nav_guide' />
          <Navitem to='/about' intlId='nav_about' />
          <Navitem to='/contactus' intlId='nav_contactus' />
        </ul>
      </div>
      <LoginModal />

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
        >
          <option value="ar">AR</option>
          <option value="en">EN</option>
        </Select>
      </div>
    </div>
  );
};

export default Nav;