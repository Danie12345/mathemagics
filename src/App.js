import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import Container from './components/container/Container';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <Container />
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;
