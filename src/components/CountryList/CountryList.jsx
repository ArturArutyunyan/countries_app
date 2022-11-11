import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCountries, togglePopupStatus } from '../../redux/actions';
import Country from '../Country/Country';
import Popup from '../Popup/Popup';
import Paginator from '../Paginator/Paginator';
import paginate from '../../helpers/paginate'

import styles from './CountryList.module.css';

function CountryList() {
  const dispatch = useDispatch();
  const [countryCode, setCountryCode] = useState();

  const { countries, popupStatus, currentPage } = useSelector((state) => state.countryReducer);


  const changePopupStatus = (countryCode) => {
    dispatch(togglePopupStatus(!popupStatus));
    setCountryCode(countryCode);
  }
 
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  const selectedPosts = paginate(countries, currentPage);

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <div>CCA2</div>
        <div>Country</div>
        <div>Capital</div>
        <div>More</div>  
      </div>

      <div>
      {countries.length 
        ? selectedPosts.map((country) => ( 
          <Country
            key={country.ccn3}
            country={country}
            changePopupStatus={changePopupStatus}
          /> )) 
        : <p className={styles.notice}>There is no countries in your list!</p> }
      </div>

      <div styles={styles.paginator}>
        <Paginator countries={countries} />
      </div>

      {popupStatus && <Popup country={countries.filter((country) => country.ccn3 === countryCode)[0]} /> }      
    </div>
  );
}

export default CountryList;
