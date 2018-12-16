/*
|--------------------------------------------------------------------------
| csrf.js
|--------------------------------------------------------------------------
|
| This module adds csrf protection to the express app.
|
*/

module.exports = (app) => {

    const csrf = require('csurf');

    app.use(csrf({cookie: true}));
    app.use(function (err, req, res, next) {

        if (err.code !== 'EBADCSRFTOKEN') return next(err);

        // handle CSRF token errors here
        res.status(403);
        // res.send(debug ? 'Missing CSRF Token' : null);
        res.send('Missing CSRF Token');
    });

}