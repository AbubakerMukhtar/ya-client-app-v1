import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screens/main/dashboard/Home';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Navigation;
