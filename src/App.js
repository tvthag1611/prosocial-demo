import React, { useState } from 'react';
import './App.css';
import Navar from './view/Home/Navar'
import { BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import routes from './config/routes';
import Login from './view/Login';
import { useSelector } from 'react-redux';

function App() {
  const { isLogged } = useSelector(state => state.homeReducer)
  
  return (
    !isLogged ?
      <Login /> :
    <Router>
      <div className="app">
        <Navar />
        <Switch>
          {
          routes.map((route, index) => {
            const { path, exact , component } = route
            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                component={component}
              />
            )
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
