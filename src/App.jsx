import React from 'react';
import {
  Routes, Route, BrowserRouter, Navigate,
} from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import CountryListPage from './pages/CountryListPage/CountryListPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage';

import WithAuthRedirect from './hoc/WithAuthRedirect';
import WithoutAuthRedirect from './hoc/WithoutAuthRedirect';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appWrapper}>
      <BrowserRouter>
        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={WithAuthRedirect(CountryListPage)}
            />
            <Route
              path="/login"
              element={WithoutAuthRedirect(LoginPage)}
            />
            <Route
              path="/details/:alphaCode"
              element={WithAuthRedirect(CountryDetailsPage)}
            />
            <Route
              path="*"
              element={<Navigate to="/login" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
