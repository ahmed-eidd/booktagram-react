import React from 'react';
import Button from '../../../Button/Button';
import classes from './Header.module.scss';
import { useIntl } from 'react-intl';
// import HeaderImg from '../../../../assests/Group_3642x.png';
import HeaderImg from '../../../../assests/main-background.png';
import {useDispatch} from 'react-redux'
import { setAuthModalOpen} from '../../../../store/auth/action'

const Header = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch()
  const f = (id) => formatMessage({ id });
  return (
    <section className={classes.Header}>
      <img
        src={HeaderImg}
        alt='background'
      />
      {/* <Image src='/assests/Backgroud-1.png' width={1080} height={600} layout='intrinsic' /> */}
      <div className={classes.HeaderText}>
        <h3>booktagram</h3>
        <p>
          A site dedicated to reading lovers that enables them to follow
          cultural news and events taking place in the region Reading groups can
          be establishedand used books can be bought and sold.
        </p>
      
        <Button type="link" to="#" style={{ marginRight: 'auto' }} onClick={() => dispatch(setAuthModalOpen('signin'))}>
          Sign up
        </Button>
      </div>
    </section>
  );
};

export default Header;
