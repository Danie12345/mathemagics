import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from '../nav/Nav';
import Home from '../home/Home';
import CalculatorSection from '../calculator-section/CalculatorSection';
import Quote from '../quote/Quote';

const Container = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<CalculatorSection />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default Container;
