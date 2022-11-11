import React from 'react';

import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Good to see you again!</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
