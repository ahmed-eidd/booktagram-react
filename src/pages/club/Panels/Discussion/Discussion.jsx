import { useFormik } from 'formik';
import React from 'react';
import TextArea from '../../../../components/TextArea/TextArea';
import classes from './Discussion.module.scss';
import Button from '../../../../components/Button/Button';
import Post from './Post/Post';

const Discussion = () => {
  const formik = useFormik({
    initialValues: {
      post: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { initialValues, handleSubmit, values, handleChange } = formik;
  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.Discussion__WritePost}>
        <TextArea
          className={classes.Discussion__WritePost__Input}
          name="post"
          id="post"
          placeholder="Write a Post"
          type="text"
          onChange={handleChange}
          value={values.post}
        />
        <div className={classes.Discussion__WritePost__ActionBox}>
          <Button type="submit">Post</Button>
        </div>
      </form>
      <div className={classes.Discussion__Posts}>
        <h3 className={classes.Discussion__Posts__Title}>New Activity</h3>
        <Post />        
      </div>
    </div>
  );
};

export default Discussion;
