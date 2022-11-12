import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shape, arrayOf } from 'prop-types';

import { PAGESIZE } from '../../redux/constants';
import { changeCurrentPage } from '../../redux/actions';

import styles from './Pagination.module.css';

function Pagination({ countries }) {
  const currentPage = useSelector((state) => state.countryReducer.currentPage);
  const dispatch = useDispatch();

  const pagesCount = useMemo(() => Math.ceil(countries.length / PAGESIZE), [countries]);

  const handleButton = (event) => {
    dispatch(changeCurrentPage(Number(event.target.textContent)));
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

export default Pagination;
