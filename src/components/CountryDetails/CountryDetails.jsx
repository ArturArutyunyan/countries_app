import React from 'react';

import styles from './CountryDetails.module.css';

function CountryDetails({country}) {
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
          {
            currencies.map((currency) => (
              <p>{currency[1].name} - {currency[1].symbol}</p>
            ))
          }
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

export default CountryDetails;
