import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const modalEl = document.getElementById('modal');

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className={classes['modal-container']} onClick={props.onClose}>
      {props.children}
    </div>,
    modalEl
  )
}

export default Modal
