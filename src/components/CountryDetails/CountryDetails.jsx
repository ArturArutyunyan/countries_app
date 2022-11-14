import React, { memo } from 'react';
import { shape, string } from 'prop-types';

import styles from './CountryDetails.module.css';

function CountryDetails({ country, country: { name: { common, official }, flags: { svg } } }) {
  const languages = Object.values(country.languages).join(' | ');
  const currencies = Object.entries(country.currencies);

  return (
    <div className={styles.content}>
      <div className={styles.field}>
        <h4>Common name</h4>
        <div>{common}</div>
      </div>

      <div className={styles.field}>
        <h4>Official name</h4>
        <div>{official}</div>
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
          <img className={styles.img} alt="Logo" src={svg} />
        </div>
      </div>
    </div>
  );
}

CountryDetails.propTypes = {
  country: shape({
    name: shape({
      common: string,
      official: string,
    }),
    flags: shape({
      svg: string,
    }),
  }).isRequired,
};

export default memo(CountryDetails);
