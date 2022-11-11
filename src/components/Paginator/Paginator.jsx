import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeCurrentPage } from '../../redux/actions'

import styles from './Paginator.module.css';

const PAGESIZE = 8;
function Paginator({ countries }) {
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

export default Paginator;
