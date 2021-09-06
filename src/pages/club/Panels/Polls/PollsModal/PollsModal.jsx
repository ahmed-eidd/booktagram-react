import React, { useState } from 'react';
import RadioGroup from '../../../../../components/Form/RadioGroup/RadioGroup';
import Radio from '../../../../../components/Form/Radio/Radio';
import Modal from '../../../../../components/Modal/Modal';
import Calendar from '../../../../../components/Form/Calendar/Calendar';
import TextArea from '../../../../../components/Form/TextArea/TextArea';
import InputField from '../../../../../components/Form/InputField/InputField';
import { Formik } from 'formik';
import FormGroup from '../../../../../components/Form/FormGroup/FormGroup';
import Button from '../../../../../components/Button/Button';
import { Flex } from '@chakra-ui/react';
import Questions from './Questions';

// Constant
const READ_MONTH = 'Read Month';
const MEETING = 'Meeting';
const QUESTION = 'Question';

const PollsModal = ({ open, onClose, onOpen }) => {
  const [type, setType] = useState(READ_MONTH);

  // const Questions = (
  //   <Formik
  //     onSubmit={(values) => console.log(values)}
  //     initialValues={{
  //       description: '',
  //       singleQuestion: '',
  //       questions: [],
  //       time: new Date(),
  //     }}
  //   >
  //     {({ values, setFieldValue }) => (
  //       <FormGroup title='Questions'>
  //         <TextArea
  //           name='description'
  //           label='Description'
  //           placeholder='Description'
  //         />
  //         <Flex justifyContent='start' direction='column' alignItems='start'>
  //           <InputField
  //             errorMessage={
  //               values.questions.length > 4 ? 'Too Many Questions' : null
  //             }
  //             labelStyle={{ fontWeight: 'bold' }}
  //             name='singleQuestion'
  //             label='Add Question To Pool'
  //             placeholder='write a question'
  //           />
  //           <Button
  //             onClick={() => {
  //               if (values.questions.length > 4) return;
  //               setFieldValue('questions', [
  //                 ...values.questions,
  //                 values.singleQuestion,
  //               ]);
  //               setFieldValue('singleQuestion', '')
  //             }}
  //           >
  //             Add
  //           </Button>
  //         </Flex>
  //         <Flex
  //           justifyContent='space-between'
  //           direction='column'
  //           alignItems='center'
  //         >
  //           {values.questions.map((el, i) => (
  //             <Flex key={i} style={{ width: '100%' }}>
  //               <p>{el}</p>
  //               <div
  //               style={{marginLeft:'10px', fontWeight: 'bold', fontSize: '2rem'}}
  //                 onClick={() => {
  //                   const newValues = values.questions.filter((item) =>
  //                     console.log(item === el)
  //                   );
  //                   console.log(newValues);
  //                   setFieldValue('questions', values.questions.filter((item) => item !== el));
  //                 }}
  //               >
  //                 delete
  //               </div>{' '}
  //             </Flex>
  //           ))}
  //         </Flex>
  //         <Calendar name='time' label='Time' />
  //         <Button type='submit' style={{ marginLeft: 'auto' }}>
  //           Save
  //         </Button>
  //       </FormGroup>
  //     )}
  //   </Formik>
  // );

  const Meetings = (
    <Formik
      onSubmit={() => console.log('aaa')}
      initialValues={{ description: '', questions: '' }}
    >
      {() => (
        <FormGroup title='Meetings'>
          <TextArea
            name='description'
            label='Description'
            placeholder='Description'
          />
          <InputField
            name='questions'
            label='Add Question To Pool'
            placeholder='write a question'
          />
          {/* <Calendar /> */}
        </FormGroup>
      )}
    </Formik>
  );

  const ReadMonth = (
    <Formik
      onSubmit={() => console.log('aaa')}
      initialValues={{ description: '', questions: '' }}
    >
      {() => (
        <FormGroup title='Read Month'>
          <TextArea
            name='description'
            label='Description'
            placeholder='Description'
          />
          <InputField
            name='questions'
            label='Add Question To Pool'
            placeholder='write a question'
          />
          {/* <Calendar /> */}
        </FormGroup>
      )}
    </Formik>
  );

  console.log(type);
  return (
    <Modal
      size='lg'
      title='Create A New Poll'
      isOpen={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <RadioGroup title='Choose Poll Type' onChange={setType} value={type}>
        <Radio value={READ_MONTH}>{READ_MONTH}</Radio>
        <Radio value={MEETING}>{MEETING}</Radio>
        <Radio value={QUESTION}>{QUESTION}</Radio>
      </RadioGroup>

      {type === QUESTION && <Questions />}
      {type === MEETING && Meetings}
      {type === READ_MONTH && ReadMonth}
    </Modal>
  );
};

export default PollsModal;
