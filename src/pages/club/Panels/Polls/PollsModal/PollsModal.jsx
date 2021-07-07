import { Radio } from '@chakra-ui/react';
import React from 'react'
import Modal from '../../../../../components/Modal/Modal';

const PollsModal = ({open,onClose,onOpen}) => {
  return (
    <Modal isOpen={open} onClose={onClose} onOpen={onOpen}>
      <Radio >Test</Radio>
      <Radio >Test</Radio>
      <Radio >Test</Radio>
    </Modal>
  )
}

export default PollsModal
