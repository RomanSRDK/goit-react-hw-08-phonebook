import styles from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'redux/Contacts/contacts-actions';
import { getContacts } from 'redux/Contacts/contacts-selectors';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChanger = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = event => {
    event.preventDefault();
    const isContactExist = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      alert(`${isContactExist.name} is already in contact`);
      return;
    }
    const contact = { name, number };
    dispatch(add(contact));
    reset();
  };
  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <>
      <form className={styles.form} onSubmit={formSubmit}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChanger}
            placeholder="Name"
          />
        </label>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChanger}
            placeholder="Phone"
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contacts
        </button>
      </form>
    </>
  );
};

export default ContactForm;
