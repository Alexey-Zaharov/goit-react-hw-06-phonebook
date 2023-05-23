import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/listSlice';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const getContacts = useSelector(state => state.contacts);
  const newContact = (data, event) => {
    getContacts.some(
      contacts => contacts.name.toLowerCase() === data.name.toLowerCase()
    )
      ? window.alert(data.name + ' is already in contacts')
      : dispatch(addContact(data)) && event.target.reset();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nameData = {
      name: event.currentTarget.elements.name.value,
      id: nanoid(),
      number: event.currentTarget.elements.number.value.toString(),
    };
    newContact(nameData, event);
  };

  return (
    <div className={css.contactForm}>
      <form onSubmit={handleSubmit}>
        <label className={css.contactLable}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.contactInput}
          />
        </label>
        <label className={css.contactLable}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.contactInput}
          />
        </label>

        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
