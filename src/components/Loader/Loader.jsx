import React from 'react';

import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
}

export default Loader;
