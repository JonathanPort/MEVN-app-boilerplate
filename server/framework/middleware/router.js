/*
|--------------------------------------------------------------------------
| router.js
|--------------------------------------------------------------------------
|
| This module loads all route files for the Express app.
|
*/

module.exports = (app) => {

    const routes = require('./../../bootstrap/routes');

    for (let i = 0; i < routes.length; i++) app.use(routes[i].uri, routes[i].file);

}