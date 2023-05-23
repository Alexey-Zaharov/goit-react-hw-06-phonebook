import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/listSlice';
import css from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.contactListButton}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListElement;
