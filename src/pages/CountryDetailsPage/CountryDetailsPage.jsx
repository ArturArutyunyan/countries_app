import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import CountryDetails from '../../components/CountryDetails/CountryDetails';
import { getCountryByAlphacode } from '../../redux/actions';

import styles from './CountryDetailsPage.module.css';

function CountryDetailsPage() {
  const dispatch = useDispatch();
  const { alphaCode } = useParams();
  const { country } = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(getCountryByAlphacode(alphaCode));
  }, [dispatch, alphaCode]);

  return (
    <div className={styles.content}>
      <Header />
      <h2 className={styles.title}>More about country</h2>
      { country.length && <CountryDetails country={country} />}
    </div>
  );
}

export default CountryDetailsPage;

