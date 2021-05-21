import React, { useState } from 'react';

import InputForm from './InputForm';
import UsersContainer from './UsersContainer';
import Modal from './Modal';
import ModalInfo from './ModalInfo';
import classes from './App.module.css';

function App() {

  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const addUsers = (user) => {
    setUsers(prevState => ([user, ...prevState]));
  }

  let usersContainer = users.length ? <UsersContainer users={users} /> : null;

  const onCloseModal = () => {
    setShowModal(false);
  }

  let modal = showModal && (
    <Modal onClose={onCloseModal}>
      <ModalInfo message={message} onClose={onCloseModal} />
    </Modal>
  )

  return (
    <div className={classes['app-container']}>
      <InputForm setUsers={addUsers} setShowModal={setShowModal} setMessage={setMessage} />
      {usersContainer}
      {modal}
    </div>
  );
}

export default App;
