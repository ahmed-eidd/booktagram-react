import { Flex } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import Button from '../../../../../components/Button/Button';
import FormCalendar from '../../../../../components/Form/Calendar/Calendar';
import FormGroup from '../../../../../components/Form/FormGroup/FormGroup';
import InputField from '../../../../../components/Form/InputField/InputField';
import TextArea from '../../../../../components/Form/TextArea/TextArea';
import * as Yup from 'yup';
import { useState } from 'react';
import BookCover from '../../../../../components/BookCover/BookCover';
import cover from '../../../../../assests/bookcover.jpg';

const Questions = () => {
  const [error, setError] = useState('');
  const schema = Yup.object({
    description: Yup.string().required().default(''),
    singleQuestion: Yup.string().default(''),
    questions: Yup.array().required().default([]),
    time: Yup.date().required(),
  });
  const onItemAdd = (values, setValue) => {
    console.log(values.singleQuestion);
    if (values?.singleQuestion === '') {
      setError('Type something to add');
      return;
    }

    if (values?.questions?.length > 4) {
      setError('Too Many Questions');
      return;
    }
    setValue('questions', [...values.questions, values.singleQuestion]);
    setValue('singleQuestion', '');
    setError('');
  };
  // const onItemDelete = (values, setValue, el) => {
  //   setValue(
  //     'questions',
  //     values?.questions.filter((item) => item !== el)
  //   );
  // };
  return (
    <Formik
      onSubmit={(values) => console.log(values)}
      initialValues={schema.cast()}
      validationSchema={schema}
    >
      {({ values, setFieldValue }) => (
        <FormGroup title='Questions'>
          <TextArea
            name='description'
            label='Description'
            placeholder='Description'
          />
          <Flex justifyContent='start' direction='column' alignItems='start'>
            <InputField
              errorMessage={error}
              labelStyle={{ fontWeight: 'bold' }}
              name='singleQuestion'
              label='Add Book To The Pool'
              placeholder='write a question'
            />
            <Button onClick={() => onItemAdd(values, setFieldValue)}>
              Add
            </Button>
          </Flex>
          <Flex
            justifyContent='space-between'
            direction='column'
            alignItems='center'
          >
            <Flex style={{ width: '100%' }}>
              {/* <ListItem
                  onDelete={() => onItemDelete(values, setFieldValue, el)}
                >
                  {el}
                </ListItem> */}
              <BookCover
                cover={cover}
                title='Rich Dad , Poor Dad'
                author='Ahmed Eid'
              />
              <BookCover
                cover={cover}
                title='Rich Dad , Poor Dad'
                author='Ahmed Eid'
              />
              <BookCover
                cover={cover}
                title='Rich Dad , Poor Dad'
                author='Ahmed Eid'
              />
            </Flex>
          </Flex>
          <FormCalendar name='time' label='Poll Du Date' />
          <Button type='submit' style={{ marginLeft: 'auto' }}>
            Save
          </Button>
        </FormGroup>
      )}
    </Formik>
  );
};

export default Questions;
