import PropTypes from 'prop-types';

import ContactsListItem from './ContactsListItem/ContactsListItem';
import Spiner from '../Spiner/Spiner';

import styles from './contactList.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import {
  getFilteredContacts,
  isLoadingContacts,
} from 'redux/phonebook/phonebook-selectors';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/phonebook/phonebook-operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  // const isContacts = Boolean(filteredContacts.length);
  const isLoading = useSelector(isLoadingContacts);
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

  if (isLoading) {
    return <Spiner />;
  }
  const elements = filteredContacts.map(({ id, name, number }) => {
    return <ContactsListItem key={id} id={id} name={name} number={number} />;
  });

  return !elements.length > 0 ? (
    <p>Not yet added contacts</p>
  ) : (
    <ol className={styles.list}>{elements}</ol>
  );
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
