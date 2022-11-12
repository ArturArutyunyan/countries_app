import React from 'react';
import { shape, string, arrayOf } from 'prop-types';

import styles from './CountryDetails.module.css';

function CountryDetails({ country }) {
  const languages = Object.values(country[0].languages).join(' | ');
  const currencies = Object.entries(country[0].currencies);

  return (
    <div className={styles.content}>
      <div className={styles.field}>
        <h4>Common name</h4>
        <div>{country[0].name.common}</div>
      </div>

      <div className={styles.field}>
        <h4>Official name</h4>
        <div>{country[0].name.official}</div>
      </div>

      <div className={styles.field}>
        <h4>Currencies</h4>
        <div>
          {`${currencies[0][1].name} - ${currencies[0][1].symbol}`}
        </div>
      </div>

      <div className={styles.field}>
        <h4>Languages</h4>
        <div>{languages}</div>
      </div>

      <div className={styles.field}>
        <h4>Flag</h4>
        <div>
          <img className={styles.img} alt="Logo" src={country[0].flags.svg} />
        </div>
      </div>
    </div>
  );
}

CountryDetails.propTypes = {
  country: arrayOf(shape({
    cca2: string,
    ccn3: string,
    capital: arrayOf(string),
  })).isRequired,
};

export default CountryDetails;
