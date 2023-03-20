import { useState } from 'react';

import initialState from './initialState';

import styles from './contactForm.module.scss';
import { useDispatch } from 'react-redux';

import { fetchAddContact } from 'redux/phonebook/phonebook-operations';
const ContactsForm = () => {
  const [contact, setContact] = useState({ ...initialState });

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevContact => {
      return { ...prevContact, [name]: value };
    });
  };

  const handleAddContact = ({ name, number }) => {
    dispatch(fetchAddContact({ name, number }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ ...contact });
    setContact({ ...initialState });
  };

  const { name, number } = contact;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>Name</p>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <p>Number</p>
      <input
        className={styles.input}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactsForm;
