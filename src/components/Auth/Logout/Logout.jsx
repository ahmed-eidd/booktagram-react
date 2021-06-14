import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty, isLoaded} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';
import {logoutAction} from '../../../store/auth/action';
import SplashScreen from '../../SplashScreen/SplashScreen';

const Logout = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  useEffect(() => {
    dispatch(logoutAction()) 
  }, [dispatch]);
  return (
    !isEmpty(auth) && isLoaded(auth) ? <SplashScreen /> : <Redirect to="/" />
  );
};

export default Logout;
