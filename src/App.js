import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import 'assets/css/style.css'
import 'assets/css/common.css'
import 'react-notifications/lib/notifications.css';
 import User from 'components/pages/Master/User/UserPage'


 

const App = ({ location }) => (
  <div>
    <Switch>
      <Route location={location} path="/" exact component={User} /> 
    </Switch>
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;

