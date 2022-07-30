import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Service from './Service';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Service} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
