import { useDispatch, useSelector } from 'react-redux';
import styles from '../UserMenu/userMenu.module.css';
import authorizationSelectors from 'redux/authorization/authorization-selectors';
import authorizationOperations from 'redux/authorization/authorization-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authorizationSelectors.getUserName);
  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome {name}!</span>
      <button
        type="button"
        onClick={() => dispatch(authorizationOperations.logOut())}
      >
        Exit
      </button>
    </div>
  );
}
