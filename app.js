/* eslint new-cap: [2, {"capIsNewExceptions": ["Server"]}] */

require('babel/register');

import express from 'express';
import path from 'path';
import ReactEngine from 'react-engine';
import env from 'node-env-file';

env('./.env');

const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 9000;
const engine = ReactEngine.server.create({
    routes: require(path.join(__dirname, '/public/routes.jsx')),
    routesFilePath: path.join(__dirname, '/public/routes.jsx')
});

app.engine('.jsx', engine);
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jsx');
app.set('view', require('react-engine/lib/expressView'));
app.use(express.static( path.join(__dirname, '/public' )));

require('./app/router.js')(app);

http.listen(port, () => {
    console.log('listing on port:' + port);
});
