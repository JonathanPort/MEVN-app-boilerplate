const Router = require('express').Router();

/*
|--------------------------------------------------------------------------
| Application routes
|--------------------------------------------------------------------------
|
| This module sets up application routes into groups. For each group of
| routes needed for the application, create a new file in the routes
| directory and require it here with the route URI prefix as the index.
|
*/

Router.use('/', require('./home.js'));
Router.use('/about', require('./about.js'));

module.exports = Router;

