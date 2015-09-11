'use strict'; // eslint-disable-line

// make `.jsx` file requirable by node
// TODO: Node-JSX is depreated need to move this to Babel when React Engine supports it.
require('node-jsx').install({ harmony: true });

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

require('./app/router.js')(app);

http.listen(port, function() {
  console.log('listing on port:' + port); // eslint-disable-line
});
