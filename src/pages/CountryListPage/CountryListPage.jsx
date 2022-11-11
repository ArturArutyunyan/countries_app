import React from 'react';

import Header from '../../components/Header/Header';
import CountryList from '../../components/CountryList/CountryList';

import styles from './CountryListPage.module.css';

function CountryListPage() {
  return (
    <div className={styles.content}>
      <Header />
      <CountryList />
    </div>
  );
}

export default CountryListPage;
