import { createContext, useState } from 'react';

export const ContextUser = createContext({
  users: [],
  showModal: false,
  message: '',
  addUsers: () => { },
  onCloseModal: () => { },
  setMessage: () => { }
})

const ContextComponent = (props) => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const addUsers = (user) => {
    setUsers(prevState => ([user, ...prevState]));
  }

  const onCloseModal = () => {
    setShowModal(false);
  }

  return (
    <ContextUser.Provider value={{ users, addUsers, showModal, onCloseModal, message, setMessage, setShowModal }}>{props.children}</ContextUser.Provider>
  )
}

export default ContextComponent;