import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Authorization/Authorization.module.css';

export default function Authorization() {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={styles.link}
        activeclassname={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}
