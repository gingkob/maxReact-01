import React, { useRef } from 'react';
import classes from './InputForm.module.css';
import Button from './UI/Button';

const InputForm = (props) => {

  let nameInput = useRef();
  let ageInput = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    let name = nameInput.current.value.trim();
    let age = parseInt(ageInput.current.value.trim());

    if (!name || age <= 0) {
      props.setMessage('Please enter a valid name and age');
      props.setShowModal(true);
      return;
    }
    props.setUsers(`${name}: (${age} years old)`);
    nameInput.current.value = '';
    ageInput.current.value = '';
  }

  return (
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
  )
}

export default InputForm
