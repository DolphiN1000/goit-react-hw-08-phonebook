import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchDeleteContact } from 'redux/phonebook/phonebook-operations';

import Button from 'shared/components/Button/Button';

// import styles from './contactsListItem.module.scss';

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <Button id={id} onClick={() => handleDeleteContact(id)}>
        Delete
      </Button>
    </li>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
