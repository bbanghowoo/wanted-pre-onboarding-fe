import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import NavigationBar from '../components/NavigationBar';
import Feeds from '../pages/Feeds';
import Login from '../pages/Login';

const MainRoutes = () => {
  const context = useContext(AuthContext);

  const { isLoggedIn } = context;

  return (
    <React.Fragment>
      {isLoggedIn && <NavigationBar />}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Feeds /> : <Login />} />
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
