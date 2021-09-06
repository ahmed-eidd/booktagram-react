import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Spinner,
} from '@chakra-ui/react';
import classes from './Modal.module.scss';

const Modal = ({ isOpen, onOpen, onClose, children, loading,title, size ='md' }) => {
  const ModalClasses = [
    classes.ModalChildren,
    loading ? classes.ModalChildrenLoading : null,
  ].join(' ');

  const SpinnerClasses = [
    classes.ModalSpinner,
    loading ? classes.ModalSpinnerLoading : null,
  ].join(' ');

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior='inside'
      className={classes.Modal}
      size={ size } 
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          className={classes.ModalCloseBtn}
          colorScheme='white'
        />
        <ModalBody className={classes.ModalBody}>
          {title && <h2 className={classes.Modal__Title}>{title}</h2>}
          <div className={ModalClasses}>{children}</div>
          {loading && (
            <Spinner className={SpinnerClasses} size='xl' thickness='4px' />
          )}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
