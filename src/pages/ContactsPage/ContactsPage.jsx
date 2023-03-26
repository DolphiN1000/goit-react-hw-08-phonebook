import Phonebook from 'components/Phonebook/Phonebook';

import styles from './contactsPage.module.scss'

const ContactsPage = () => {
  return <div className={styles.container}><Phonebook />;</div>
};

export default ContactsPage;
