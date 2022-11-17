import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  shape, string, func, arrayOf,
} from 'prop-types';

import styles from './Country.module.css';

function Country({
  country: {
    cca2,
    cca3,
    capital,
    name: { common },
  },
  handleClick,
}) {
  return (
    <div className={styles.content}>
      <div>{cca2}</div>
      <div className={styles.countryName}>
        <button className={styles.countryButton} type="button" onClick={() => handleClick(cca3)}>{common}</button>
      </div>
      <div>{capital}</div>
      <div className={styles.eyeButton}>
        <Link to={`/details/${cca3}`} className={styles.link}>
          <img className={styles.img} alt="eye-button" src="/assets/images/eye-button.png" />
        </Link>
      </div>
    </div>
  );
}

Country.propTypes = {
  country: shape({
    cca2: string,
    cca3: string,
    capital: arrayOf(string),
  }).isRequired,
  handleClick: func.isRequired,
};

export default memo(Country);
