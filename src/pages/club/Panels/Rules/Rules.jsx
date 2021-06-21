import React, { useState, useRef } from 'react';
import classes from './Rules.module.scss';
import { useOutsideClick } from '@chakra-ui/react';
// import useOutsideAlerter from '../../../../Hooks/useOutsideAlerter';

const Rules = () => {
  const ModalRef = useRef(null); 
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen)
  const onModalHandler = () => {
    setModalOpen(true);
    console.log('click on dots')
   
  };
  const Modal = (
    <div className={modalOpen ? [classes.Rule__Modal, classes.ModalOpen].join(' ') : classes.Rule__Modal } ref={ModalRef}>
      <div>Edit Rule</div>
      <div>Delete Rule</div>
    </div>
  );
  useOutsideClick({ ref: ModalRef, handler: () => setModalOpen(false) });
  return (
    <div className={classes.Rules}>
      <h2 className={classes.Rules__Title}>Lorem Ipsum Book Club Rules</h2>
      <div className={classes.Rule} >
        {modalOpen && Modal}
        <p className={classes.Rule__Text}>
          1 Make Sure Everyone Feels Safe. Bullying Of ANy Kind Isn't ALlowed,
          And Degrading Comments About Thing Like Race,
        </p>
        <div className={classes.Rule__Icon} onClick={onModalHandler}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className={classes.Rule}>
        <p className={classes.Rule__Text}>2 Respect Everyone's Privacy</p>
        <div className={classes.Rule__Icon} onClick={onModalHandler}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div className={classes.Rule} onClick={onModalHandler}>
        <p className={classes.Rule__Text}>3 Respect Everyone's Privery</p>
        <div className={classes.Rule__Icon}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    </div>
  );
};

export default Rules;
