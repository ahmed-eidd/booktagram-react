import React from 'react'
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Spinner
} from "@chakra-ui/react"
import classes from './Modal.module.scss';



const Modal = ({isOpen, onOpen, onClose, children, loading}) => {
  // const {  onOpen, onClose } = useDisclosure();
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

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </ChakraModal>

  )
}

export default Modal;
