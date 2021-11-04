import { Formik } from 'formik';
import React from 'react';
import TextArea from '../../../../components/Form/TextArea/TextArea';
import classes from './Discussion.module.scss';
import Button from '../../../../components/Button/Button';
import FormGroup from '../../../../components/Form/FormGroup/FormGroup';
import Post from './Post/Post';

const Discussion = () => {
  return (
    <div>
      <Formik
        initialValues={{
          post: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <FormGroup formClassName={classes.Discussion__WritePost}>
            <TextArea
              className={classes.Discussion__WritePost__Input}
              name='post'
              placeholder='Write a Post'
              type='text'
            />
            <div className={classes.Discussion__WritePost__ActionBox}>
              <Button type='submit'>Post</Button>
            </div>
          </FormGroup>
        )}
      </Formik>
      <div className={classes.Discussion__Posts}>
        <h3 className={classes.Discussion__Posts__Title}>New Activity</h3>
        <Post />
      </div>
    </div>
  );
};

export default Discussion;
