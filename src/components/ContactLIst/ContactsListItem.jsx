import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { remove } from 'redux/Contacts/contacts-actions';
import styles from '../ContactLIst/ContactList.module.css';
import Button from 'components/Button/Button';

export default function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={styles.item} key={id}>
      <p className={styles.p}>{name}</p>
      <p className={styles.rightP}>{number}</p>
      <Button text="Delete" onClick={() => dispatch(remove(id))} />
    </li>
  );
}
ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
