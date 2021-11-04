import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button/Button';
// import {signOut} from '../store/auth/slice';

const Success = () => {
  const auth = useSelector((state) => state.firebase.profile);
  const onLogOutHandler = () => {
    // dispatch(signOut());
  };
  return (
    <div>
      <Button onClick={onLogOutHandler}>Log Out</Button>
      <h1>{auth.firstName + ' ' + auth.lastName}</h1>
    </div>
  );
};

export default Success;
