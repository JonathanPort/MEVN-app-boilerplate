/*
|--------------------------------------------------------------------------
| Create the application
|--------------------------------------------------------------------------
|
| This file is used to start the node server. Everything to do with web
| request functionality starts here.
|
*/

const app = require('express')();

/*
|--------------------------------------------------------------------------
| Bring in dotenv
|--------------------------------------------------------------------------
|
| dotenv module used for storing unique env variables across multiple
| enviroments.
|
*/

const dotenv = require('dotenv').config();

/*
|--------------------------------------------------------------------------
| Bootstrap server modules
|--------------------------------------------------------------------------
|
| Load in all modules from './boot' that are required for the app.
|
*/

Object.entries(require('./bootstrap/boot')).forEach(([index, handler]) => {
    handler(app);
});

require('./utils/debug')(`Loaded Boot Modules`);
