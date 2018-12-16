/*
|--------------------------------------------------------------------------
| cookieParser.js
|--------------------------------------------------------------------------
|
| This module sets up cookie parsing into the Express application.
|
*/

module.exports = (app) => {

    const cookieParser = require('cookie-parser');

    app.use(cookieParser());

}