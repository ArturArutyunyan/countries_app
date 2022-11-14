import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Loader from '../../components/Loader/Loader';
import CountryDetails from '../../components/CountryDetails/CountryDetails';

import { getCountryByAlphacodeAction } from '../../redux/actions';

import styles from './CountryDetailsPage.module.css';

function CountryDetailsPage() {
  const dispatch = useDispatch();
  const { alphaCode } = useParams();
  const { country, isLoading } = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(getCountryByAlphacodeAction(alphaCode));
  }, [dispatch, alphaCode]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.content}>
      <Header />
      <h2 className={styles.title}>More about country</h2>
      { country.length && <CountryDetails country={country} />}
    </div>
  );
}

export default CountryDetailsPage;
