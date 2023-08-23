import { useSelector } from 'react-redux';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import Authorization from 'components/Authorization/Authorization';
import authorizationSelectors from 'redux/authorization/authorization-selectors';
import styles from '../AppBar/AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(authorizationSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Authorization />}
    </header>
  );
}
