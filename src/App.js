import React, { useState } from 'react';
import './App.css';
import Navar from './view/Home/Navar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './config/routes';

function App() {
  return (
    <Router>
      <div>
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
