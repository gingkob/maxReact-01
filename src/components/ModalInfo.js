import React from 'react';
import classes from './ModalInfo.module.css'

const ModalInfo = (props) => {
  function onClickModalInfo(e){
    e.stopPropagation();
  }
  return (
    <div className={classes['message-container']} onClick={onClickModalInfo}>
      <p className={classes['message-container__header']}>Invalid input</p>
      <div className={classes['message-container__msg']}>{props.message}</div>
      <button className={classes['message-container__btn']} onClick={props.onClose}>Ok</button>
    </div>
  )
}

export default ModalInfo
