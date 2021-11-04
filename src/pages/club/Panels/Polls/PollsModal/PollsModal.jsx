import React, { useState } from 'react';
import RadioGroup from '../../../../../components/Form/RadioGroup/RadioGroup';
import Radio from '../../../../../components/Form/Radio/Radio';
import Modal from '../../../../../components/Modal/Modal';
import Questions from './Questions';
import Meetings from './Meetings';
import ReadMonth from './ReadMonth';

// Constant
const READ_MONTH = 'Read Month';
const MEETING = 'Meeting';
const QUESTION = 'Question';

const PollsModal = ({ open, onClose, onOpen }) => {
  const [type, setType] = useState(READ_MONTH);

  return (
    <Modal
      size='xl'
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
      {type === MEETING && <Meetings />}
      {type === READ_MONTH && <ReadMonth />}
    </Modal>
  );
};

export default PollsModal;
