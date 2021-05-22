import React, { useContext } from 'react';
import { ContextUser } from './store/ContextUser';
import InputForm from './InputForm';
import UsersContainer from './UsersContainer';
import Modal from './Modal';
import ModalInfo from './ModalInfo';
import classes from './App.module.css';

function App() {

  let { onCloseModal, showModal, message } = useContext(ContextUser);

  let modal = showModal && (
    <Modal onClose={onCloseModal}>
      <ModalInfo message={message} onClose={onCloseModal} />
    </Modal>
  )

  return (
    <div className={classes['app-container']}>
      <InputForm />
      <UsersContainer />
      {modal}
    </div>
  );
}

export default App;
