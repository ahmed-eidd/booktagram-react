import { Flex } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import Button from '../../../../../components/Button/Button';
import FormCalendar from '../../../../../components/Form/Calendar/Calendar';
import FormGroup from '../../../../../components/Form/FormGroup/FormGroup';
import InputField from '../../../../../components/Form/InputField/InputField';
import TextArea from '../../../../../components/Form/TextArea/TextArea';
import * as Yup from 'yup';

const Questions = () => {
  const schema = Yup.object({
    description: Yup.string().required(),
    singleQuestion: Yup.string().default(''),
    questions: Yup.array().required().default([]),
    time: Yup.date().required(),
  });
  const onItemAdd = (values, setValue) => {
    if (values?.questions?.length > 4) return;
    setValue('questions', [...values.questions, values.singleQuestion]);
    setValue('singleQuestion', '');
  };
  const onItemDelete = (values, setValue, el) => {
    setValue(
      'questions',
      values?.questions.filter((item) => item !== el)
    );
  };
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
              errorMessage={
                values.questions.length > 4 ? 'Too Many Questions' : null
              }
              labelStyle={{ fontWeight: 'bold' }}
              name='singleQuestion'
              label='Add Question To Pool'
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
            {values.questions.map((el, i) => (
              <Flex key={i} style={{ width: '100%' }}>
                <p>{el}</p>
                <div
                  style={{
                    marginLeft: '10px',
                    fontWeight: 'bold',
                    fontSize: '2rem',
                  }}
                  onClick={() => onItemDelete(values, setFieldValue, el)}
                >
                  delete
                </div>{' '}
              </Flex>
            ))}
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
