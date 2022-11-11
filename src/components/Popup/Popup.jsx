import React from 'react';
import { useDispatch } from 'react-redux';

import { togglePopupStatus } from '../../redux/actions';

import styles from './Popup.module.css';

function Popup({ country }) {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(togglePopupStatus(false));
  };

  return (
    <div className={styles.content}>
      <div>
        <h3>Common Name</h3>
        <p>{country.name.common}</p>
      </div>

      <div>
        <h3>Official name</h3>
        <p>{country.name.official}</p>

      </div>

      <button onClick={closePopup}>X</button>
    </div>
  );
}

export default Popup;
