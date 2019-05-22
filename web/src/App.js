import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './Component/Admin/Index';
import MilkTea from './Component/View/Index'
import './App.css';

function App() {
  return (
    <div>
      <Router>
      {/* // <HashRouter> */}
      <Switch>
        <Route path="/" component={MilkTea} />
        <Route path="/Admin" name="Home" component={Index} />
      </Switch>
      {/* </HashRouter> */}
      </Router>
    </div>
  );
}

export default App;
