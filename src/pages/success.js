import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import Button from '../components/Button/Button';
import {signOut} from '../store/auth/slice';

const Success = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const onLogOutHandler = () => {
    dispatch(signOut());
  }
  return (
    <div>
      <Button onClick={onLogOutHandler} >Log Out</Button> 
      <h1>{auth.displayName}</h1>
    </div>
  )
}

export default Success;
