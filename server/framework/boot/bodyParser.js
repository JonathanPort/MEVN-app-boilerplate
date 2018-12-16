/*
|--------------------------------------------------------------------------
| bodyParser.js
|--------------------------------------------------------------------------
|
| This module adds body parsing into the Express application.
|
*/

module.exports = (app) => {

    const bodyParser = require('body-parser');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

}