import PropTypes from 'prop-types';

import ContactsListItem from './ContactsListItem/ContactsListItem';

import styles from './contactList.module.scss';
import { getFilteredContacts } from 'redux/phonebook/phonebook-selectors';
import { useSelector } from 'react-redux';

const ContactsList = () => {
  // const contactsSorted = contacts;
  // console.log(contacts)
  // .sort(function (a, b) {
  //   if (a.name.toLowerCase() > b.name.toLowerCase()) {
  //     return 1;
  //   }
  //   if (a.name.toLowerCase() < b.name.toLowerCase()) {
  //     return -1;
  //   }
  //   return 0;
  // });

  const contacts = useSelector(getFilteredContacts)
  const elements = contacts.map(({ id, name, number }) => {
    return (
      <ContactsListItem
        key={id}
        id={id}
        name={name}
        number={number}
      />
    );
  });

  return <ol className={styles.list}>{elements}</ol>;
};

export default ContactsList;

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
