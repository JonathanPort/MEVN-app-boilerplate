/*
|--------------------------------------------------------------------------
| router.js
|--------------------------------------------------------------------------
|
| This module loads all route files for the Express app.
|
*/

module.exports = (app) => app.use(require('./../../routes'));
