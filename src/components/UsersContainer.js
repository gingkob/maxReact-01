import React from 'react';
import classes from './UsersContainer.module.css';

function UsersContainer(props) {
  let usersContainer = (props.users.length > 0) ? props.users.map((user, index) => <p key={index}>{user}</p>) : null
  return (
    <div className={classes['users-container']}>
      {usersContainer}
    </div>
  )
}

export default UsersContainer
