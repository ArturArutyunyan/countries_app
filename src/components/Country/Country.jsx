import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, func } from 'prop-types';

import eyeButton from '../../assets/images/eye-button.png';

import styles from './Country.module.css';

function Country({ country: { cca2, ccn3, capital, name: { common } }, changePopupStatus }) {
  const handlePopup = (countryCode) => {
    changePopupStatus(countryCode);
  };

  return (
    <div className={styles.content}>
      <div>{cca2}</div>
      <div className={styles.countryName}>
        <button className={styles.countryButton} type="button" onClick={() => handlePopup(ccn3)}>{common}</button>
      </div>
      <div>{capital}</div>
      <div className={styles.eyeButton}>
        <Link to={`/details/${ccn3}`} className={styles.link}>
          <img className={styles.img} alt="eye-button" src={eyeButton} />
        </Link>
      </div>
    </div>
  );
}

Country.propTypes = {
  country: shape({
    cca2: string,
    ccn3: string,
    capital: string,
  }).isRequired,
  changePopupStatus: func.isRequired,
};

export default Country;
