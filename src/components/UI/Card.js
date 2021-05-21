import React from 'react';
import classes from './Card.module.css';

function Card(props) {
  return (
    <div className={`${classes['card-container']} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Card
