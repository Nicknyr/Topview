import React from 'react';
import Rentals from './components/Rentals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Success from './components/Success';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Rentals} />
        <Route path="/success" component={Success} />
      </Router>
    </div>
  );
}

export default App;
