import React from 'react';
import Register from './views/Register';
import Login from './views/Login';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Register path="/" />
        <Login path="/accounts/login" />
      </Router>
    </div>
  );
}

export default App;
