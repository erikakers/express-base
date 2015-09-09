'use strict';

// make `.jsx` file requirable by node
require('node-jsx').install();

import express from 'express';
import path from 'path';
import ReactEngine from 'react-engine';
import env from 'node-env-file';

const app = express();
const http = require('http').Server(app);

env('./.env');

const port = process.env.PORT || 9000;

// create the view engine with `react-engine`
let engine = ReactEngine.server.create({
  routes: require(path.join(__dirname, '/public/routes.jsx')),
  routesFilePath: path.join(__dirname, '/public/routes.jsx')
});

// set the engine
app.engine('.jsx', engine);

// set the view directory
app.set('views', path.join(__dirname, '/public/views'));

// set jsx as the view engine
app.set('view engine', 'jsx');

// finally, set the custom view
app.set('view', require('react-engine/lib/expressView'));

//expose public folder as static assets
app.use(express.static( path.join(__dirname, '/public' )));

app.get('/', function(req, res) {
  res.render(req.url, {
    title: 'React Engine Express Sample App',
    name: 'Jordan'
  });
});

// 404 template
app.use(function(req, res) {
  res.render('404', {
    title: 'React Engine Express Sample App',
    url: req.url
  });
});

http.listen(port, function() {
  console.log('listing on port:' + port);
});
