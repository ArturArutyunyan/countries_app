import React, {
  useEffect,
  useState,
  useCallback,
  memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Country from '../Country/Country';
import Loader from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';
import Popup from '../Popup/Popup';

import { getAllCountriesAction, togglePopupStatusAction } from '../../redux/actions';
import paginate from '../../helpers/paginate';

import styles from './CountryList.module.css';

function CountryList() {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const {
    countries, popupStatus, currentPage, isLoading,
  } = useSelector((state) => state.countryReducer);

  const handleCountryClick = useCallback(
    (alphaCode) => {
      setSelectedCountry(countries.find(({ ccn3 }) => ccn3 === alphaCode));
      dispatch(togglePopupStatusAction(!popupStatus));
    },
    [popupStatus, dispatch, countries],
  );

  useEffect(() => {
    dispatch(getAllCountriesAction());
  }, [dispatch]);

  const selectedPosts = paginate(countries, currentPage);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

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
              handleClick={handleCountryClick}
            />
          ))
          : <p className={styles.notice}>There is no countries in your list!</p>}
      </div>

      <Pagination countries={countries} />

      {popupStatus
        && <Popup country={selectedCountry} />}
    </div>
  );
}

export default memo(CountryList);
