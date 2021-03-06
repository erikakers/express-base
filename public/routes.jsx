
import React from 'react';
import Router from 'react-router';

import App from './views/app.jsx';
import Home from './views/home.jsx';
import About from './views/about.jsx';

const routes = (
  <Router.Route path='/' handler={ App }>
    <Router.DefaultRoute name='home' handler={ Home } />
    <Router.Route path='about' handler={ About } />
  </Router.Route>
);

export default routes;
