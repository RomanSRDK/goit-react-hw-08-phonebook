import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/contacts" className={styles.link}>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
