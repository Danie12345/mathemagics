import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';

const Container = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<CalculatorSection />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
};

export default Container;
