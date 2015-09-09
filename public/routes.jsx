'use strict';

import React from 'react';
import Router from 'react-router';

import App from './views/app.jsx';
import Home from './views/home.jsx';

var routes = module.exports = (
  <Router.Route path='/' handler={App}>
    <Router.DefaultRoute name='home' handler={Home} />
  </Router.Route>
);
