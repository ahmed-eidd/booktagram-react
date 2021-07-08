import React, { useState } from 'react';
import RadioGroup from '../../../../../components/Form/RadioGroup/RadioGroup';
import Radio from '../../../../../components/Form/Radio/Radio';
import Modal from '../../../../../components/Modal/Modal';
import Calendar from '../../../../../components/Form/Calendar/Calendar';

// Constant
const READ_MONTH = 'Read Month';
const MEETING = 'Meeting';
const QUESTION = 'Question';

const PollsModal = ({ open, onClose, onOpen }) => {
  const [type, setType] = useState(READ_MONTH);
  return (
    <Modal
      title='Create A New Poll'
      isOpen={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Calendar />
      <RadioGroup title='Choose Poll Type' onChange={setType} value={type}>
        <Radio value={READ_MONTH}>{READ_MONTH}</Radio>
        <Radio value={MEETING}>{MEETING}</Radio>
        <Radio value={QUESTION}>{QUESTION}</Radio>
      </RadioGroup>
    </Modal>
  );
};

export default PollsModal;
