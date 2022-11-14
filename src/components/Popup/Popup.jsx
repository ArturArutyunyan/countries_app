import React from 'react';
import { useDispatch } from 'react-redux';
import { shape, string } from 'prop-types';

import { togglePopupStatusAction } from '../../redux/actions';

import styles from './Popup.module.css';

function Popup({ country: { name: { common, official } } }) {
  const dispatch = useDispatch();

  const closePopup = () => {
    dispatch(togglePopupStatusAction(false));
  };

  return (
    <div className={styles.content}>
      <div>
        <h3>Common Name</h3>
        <p>{common}</p>
      </div>

      <div>
        <h3>Official name</h3>
        <p>{official}</p>

      </div>

      <button type="button" onClick={closePopup}>X</button>
    </div>
  );
}

Popup.propTypes = {
  country: shape({
    name: shape({
      common: string.isRequired,
      official: string.isRequired,
    }),
  }).isRequired,
};

export default Popup;
