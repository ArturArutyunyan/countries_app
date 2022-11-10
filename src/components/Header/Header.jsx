import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../redux/actions';

import styles from './Header.module.css';

function Header() {
  const dispatch = useDispatch();

  const logoutForm = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  }
 
  return (
    <div className={styles.headerContent}>
      <Link to="/">
        <button type="button" name="countries" className={styles.button}>Countries</button>
      </Link>

      <Link to="/login">
        <button type="button" onClick={logoutForm} name="logout" className={styles.button}>Logout</button>
      </Link>
    </div>
  );
}

export default Header;
