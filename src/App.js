import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container/Container';

const App = () => (
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Container />
    </Router>
  </React.StrictMode>
);

export default App;
