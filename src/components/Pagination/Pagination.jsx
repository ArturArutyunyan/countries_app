import React, { useMemo, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, arrayOf } from 'prop-types';

import { changeCurrentPageAction } from '../../redux/actions';
import paginationConstants from '../../constants/pagination';

import styles from './Pagination.module.css';

function Pagination({ countries }) {
  const currentPage = useSelector((state) => state.countryReducer.currentPage);
  const dispatch = useDispatch();

  const pagesCount = useMemo(
    () => Math.ceil(countries.length / paginationConstants.PAGESIZE),
    [countries],
  );

  const handleButton = (event) => {
    dispatch(changeCurrentPageAction(Number(event.target.textContent)));
  };

  return (
    <div className={styles.pagination}>
      {Array.from({ length: pagesCount }, (_, index) => (
        <button
          type="button"
          key={`button${index}`}
          onClick={handleButton}
          className={currentPage === index + 1 ? styles.selected : styles.button}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

Pagination.propTypes = {
  countries: arrayOf(shape({})).isRequired,
};

export default memo(Pagination);
