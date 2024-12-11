import React from 'react';
import Home from '../pages/Home';
import PersonDetails from '../pages/PersonDetails';
import { Route, Routes,Navigate } from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='home' />} />

    <Route path='/home' element={<Home />} />
    <Route path='/persondetails' element={<PersonDetails />} />
  </Routes>
}

export default Routers