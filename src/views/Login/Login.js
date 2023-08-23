import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authorizationOperations from 'redux/authorization/authorization-operations';
import styles from '../Login/Login.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerChanger = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authorizationOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in page</h1>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={styles.label}>
          <p className={styles.text}>Email</p>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handlerChanger}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>Password</p>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handlerChanger}
          />
        </label>
        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
}
