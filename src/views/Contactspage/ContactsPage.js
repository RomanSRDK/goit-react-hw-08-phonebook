import { Container } from 'components/Container/Container';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from 'components/ContactLIst/ContactList';
import styles from '../Contactspage/ContactsPage.module.css';

export default function ContactsViewPage() {
  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.title}> Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </div>
  );
}
