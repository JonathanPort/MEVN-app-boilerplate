/*
|--------------------------------------------------------------------------
| logger.js
|--------------------------------------------------------------------------
|
| This module adds http request logging to the express app.
|
| TODO: Add ability to change logging style through config / env.
|
*/

module.exports = (app) => {

    const logger = require('morgan');

    app.use(logger('dev'));

}