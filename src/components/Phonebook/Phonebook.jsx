import styles from './phonebook.module.scss';

import ContactsForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactsList from './ContactList/ContactList';

import '../../shared/styles/styles.scss';

const Phonebook = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Phonebook;
