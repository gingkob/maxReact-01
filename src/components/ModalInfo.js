import React from 'react';
import classes from './ModalInfo.module.css'
import Button from './UI/Button';
import Card from './UI/Card';

const ModalInfo = (props) => {
  function onClickModalInfo(e){
    e.stopPropagation();
  }
  return (
    <Card className={classes['message-container']} onClick={onClickModalInfo}>
      <p className={classes['message-container__header']}>Invalid input</p>
      <div className={classes['message-container__msg']}>{props.message}</div>
      <Button className={classes['message-container__btn']} onClick={props.onClose}>Ok</Button>
    </Card>
  )
}

export default ModalInfo
