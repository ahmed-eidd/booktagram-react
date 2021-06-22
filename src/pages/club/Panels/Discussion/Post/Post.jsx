import React, { useState } from 'react';
import classes from './Post.module.scss';
import Avatar from '../../../../../assests/avatar.jpg';
import TextArea from '../../../../../components/Form/TextArea/TextArea';
import Button from '../../../../../components/Button/Button';
import { Formik, useFormik } from 'formik';
import Comment from '../Comment/Comment';
import FormGroup from '../../../../../components/Form/FormGroup/FormGroup';
import InputField from '../../../../../components/Form/InputField/InputField';

const Post = () => {
  const [commentOpen, setCommentOpen] = useState(false);
  const onCommentClickHandler = () => {
    setCommentOpen(!commentOpen);
  };
  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setTimeout(() => {
        resetForm();
      }, 1000);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <div className={classes.Post}>
      <div className={classes.Post__Img}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={classes.Post__Settings}>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className={classes.Post__User}>
        <p className={classes.Post__Name}>Ahmed Eid</p>
        <p className={classes.Post__Date}>April 3 at 8:00 PM</p>
      </div>
      <p className={classes.Post__Content}>
        aenean et tortor at risus viverra adipiscing at inaenean et tortor at
        risus viverra adipiscing at inaenean et tortor at risus viverra
        adipiscing at inaenean et tortor at risus viverra adipiscing at inaenean
        et tortor at risus viverra adipiscing at inaenean et tortor at risus
        viverra adipiscing at inaenean et tortor at risus viverra adipiscing at
        inaenean et tortor at risus viverra adipiscing at inAenean Et Tortor At
        Risus Viverra Adipiscing At Inaenean Et Tortor At Risus Viverra
      </p>
      <div className={classes.Post__LikesAndComments}>
        <div className={classes.Post__Likes}>100 Likes</div>
        <div onClick={onCommentClickHandler} className={classes.Post__Comments}>
          88 Comments
        </div>
      </div>
      <div className={classes.Post__CommentAvatar}>
        <img src={Avatar} alt="avatar" />
      </div>
      <Formik onSubmit={(values) => console.log(values)} initialValues={{
        comment: ''
      }}>
        {() => (
          <FormGroup formClassName={classes.Post__WriteComment}>
            <InputField
            style={{
              width: '90%',
            }}
              placeholder="Write a Reply..."
              name="comment"
            />
            <Button type="submit">Reply</Button>
          </FormGroup>
        )}
      </Formik>
      {commentOpen && (
        <>
          <Comment />
          <Comment />
          <Comment />
        </>
      )}
    </div>
  );
};

export default Post;
