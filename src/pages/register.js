import { Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormGroup from '../components/FormGroup/FormGroup';
import InputField from '../components/InputField/InputField';
import Layout from '../components/Layout/Layout';
import * as Yup from 'yup';
import Button from '../components/Button/Button';
import { loginUser, signOut } from '../store/auth/slice';
import { useIntl } from 'react-intl';

const register = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const { formatMessage } = useIntl();
  const f = (id) => formatMessage({ id });
  console.log(auth);
  const schema =  Yup.object({
      email: Yup.string().email().required(f('join')),
      password: Yup.string().min(6).required(),
    });
  const [load, setload] = useState(false);
  return (
    <Layout>
      {!auth.isEmpty && (
        <Button
          type="submit"
          onClick={() => {
            dispatch(signOut());
            console.log('sometihng');
          }}
        >
          Sign Out
        </Button>
      )}
      <Formik
        validationSchema={schema}
        initialValues={schema.cast}
        onSubmit={(values) => {
          console.log(values);
          dispatch(
            loginUser({ email: values.email, password: values.password })
          );
        }}
      >
        {() => (
          <FormGroup title="Welcome To Booktagram">
            <InputField
              name="email"
              placeholder="Email"
              type="email"
              label="Email"
            />
            <InputField
              name="password"
              placeholder="Password"
              type="password"
              label="Password"
            />
            <InputField
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              label="Confirm Password"
            />
            <Button
              type="submit"
              onClick={() => setload(!load)}
              isLoading={load}
            >
              Register
            </Button>
          </FormGroup>
        )}
      </Formik>
    </Layout>
  );
};

export default register;
