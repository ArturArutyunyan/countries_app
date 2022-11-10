import React from 'react';
import { Link } from 'react-router-dom';

import eyeButton from '../../assets/images/eye-button.png';

import styles from './Country.module.css';

function Country({country, changePopupStatus}) {

  const handlePopup = (countryCode) => {
    changePopupStatus(countryCode);
  };

   return (
    <div className={styles.content}>
        <div>{country.cca2}</div>
        <div className={styles.countryName} onClick={() => handlePopup(country.ccn3)}>{country.name.common}</div>
        <div>{country.capital}</div>
        <div className={styles.eyeButton}>
          <Link to={`/details/${country.ccn3}`} className={styles.link}>
            <img className={styles.img} alt="eye-button" src={eyeButton} />
          </Link>
        </div>
    </div>
  );
}

export default Country;