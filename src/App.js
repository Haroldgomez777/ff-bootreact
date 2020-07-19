import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';


function App() {
  return (
    <div className="wrapper" >
      <Router>
        <Switch>
          <Route exact_path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
