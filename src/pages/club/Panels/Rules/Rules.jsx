import React, { useState , useRef} from 'react';
import classes from './Rules.module.scss';
import useOutsideAlerter from '../../../../Hooks/useOutsideAlerter';

const Rules = () => {
const ModalRef = useRef(null)
  const [modal, setModal] = useState(false);
  const onModalHandler = () => {
	  setModal(!modal)
  }
  const Modal = (
    <div className={classes.Rule__Modal} ref={ModalRef}>
      <div>Edit Rule</div>
      <div>Delete Rule</div>
    </div>
  );
  useOutsideAlerter(ModalRef,onModalHandler)
  return (
    <div className={classes.Rules}>
	    <h2 className={classes.Rules__Title}>Lorem Ipsum Book Club Rules</h2>
      <div className={classes.Rule}>
	{modal && Modal}
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
