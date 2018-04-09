import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import House from './components/House/House';
import Header from './components/Header/Header';
import Wizard from './components/Wizard/Wizard';

export default (
  <Switch>
    <Route component={ Dashboard} exact path="/" />
    <Route component={ Wizard } path="/wizard" />
  </Switch>
)