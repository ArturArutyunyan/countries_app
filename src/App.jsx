import React from 'react';
import { useSelector} from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import CountryListPage from './pages/CountryListPage/CountryListPage';
import CountryDetailsPage from './pages/CountryDetailsPage/CountryDetailsPage';

import './App.css';

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" 
                 element={isAuth ? <CountryListPage /> : <Navigate to="/login" />} />
          <Route path="/login" 
                 element={isAuth ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/details/:alphaCode" 
                 element={isAuth ? <CountryDetailsPage /> : <Navigate to="/login" />}/>
          <Route path={'*'} element={<Navigate to="/login" />} /> `
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;