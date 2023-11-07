var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { 
    BACKEND_ROUTES_PREFIX
} = process.env

const { ROUTES } = require('./registerRoutes')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

for (let index = 0; index < ROUTES.length; index++) {
    const route = ROUTES[index]
    app.use(`${BACKEND_ROUTES_PREFIX}${route.uri}`, require(route.path))
}

module.exports = app;
