import React from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Spinner
} from "@chakra-ui/react"
import classes from './Modal.module.scss';



const Modal = ({isOpen, onOpen, onClose, children, loading}) => {
  const ModalClasses = [classes.ModalChildren, loading ? classes.ModalChildrenLoading : null].join(' ')

  const SpinnerClasses = [classes.ModalSpinner, loading ? classes.ModalSpinnerLoading : null ].join(' ')

  return (
      <ChakraModal isOpen={isOpen} onClose={onClose} scrollBehavior='inside' className={classes.Modal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton className={classes.ModalCloseBtn} colorScheme='white' />
          <ModalBody className={classes.ModalBody}>
            <div className={ModalClasses}>

            {children}
            </div>
            <Spinner className={SpinnerClasses} size="xl"  thickness="4px"
/>
          </ModalBody>

       
        </ModalContent>
      </ChakraModal>

  )
}

export default Modal;
