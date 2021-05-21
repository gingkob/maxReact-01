import React, { useRef, useState } from 'react';
import classes from './InputForm.module.css'
import Modal from './Modal'
import ModalInfo from './ModalInfo';
import Button from './UI/Button';

const InputForm = () => {

  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')

  let nameInput = useRef()
  let ageInput = useRef()

  const onSubmit = (event) => {
    event.preventDefault();
    let name = nameInput.current.value.trim()
    let age = parseInt(ageInput.current.value.trim())

    if (!name || age <= 0) {
      setMessage('Please enter a valid name and age');
      setShowModal(true)
      return;
    }
    setUsers(prevUsers => ([...prevUsers, `${name}: (${age} years old)`]))
    nameInput.current.value = ''
    ageInput.current.value = ''
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  let usersContainer = (users.length > 0) ? (<div className={classes['users-container']}>{users.map((user, index) => (<p key={index}>{user}</p>))}</div>) : null

  let modal = showModal && (
    <Modal onClose={onCloseModal}>
      <ModalInfo message={message} onClose={onCloseModal} />
    </Modal>
  )

  return (
    <React.Fragment>
      <form className={classes['form-container']} onSubmit={onSubmit}>
        <div className={classes['input-el']}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" ref={nameInput} />
        </div>
        <div className={classes['input-el']}>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" ref={ageInput} />
        </div>
        <footer>
          <Button type='submit'>Add</Button>
        </footer>
      </form>

      {usersContainer}
      {modal}
    </React.Fragment>
  )
}

export default InputForm
