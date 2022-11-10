import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCountries, togglePopupStatus } from '../../redux/actions';
import Country from '../Country/Country';
import Popup from '../Popup/Popup';

import styles from './CountryList.module.css';

function CountryList() {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState();

  const { countries, popupStatus } = useSelector((state) => state.countryReducer);

  const changePopupStatus = (countryCode) => {
    dispatch(togglePopupStatus(!popupStatus));
    setCountryCode(countryCode);
  }
 
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div>CCA2</div>
        <div>Country</div>
        <div>Capital</div>
        <div>More</div>  
      </div>

      {countries.length 
        ? countries.slice(0,10).map((country) => ( 
          <Country
            key={country.ccn3}
            country={country}
            changePopupStatus={changePopupStatus}
          /> )) 
        : <p className={styles.notice}>There is no countries in your list!</p> }

      {popupStatus && <Popup country={countries.filter((country) => country.ccn3 === countryCode)[0]} /> }      
    </div>
  );
}

export default CountryList;
