import React, { useContext } from 'react';
import { ContextUser } from './store/ContextUser';
import classes from './UsersContainer.module.css';

function UsersContainer() {
  let { users } = useContext(ContextUser)
  let usersContainer = (users.length > 0) ? (<div className={classes['users-container']}>{users.map((user, index) => <p key={index}>{user}</p>)}</div>) : null
  return usersContainer
}

export default UsersContainer
