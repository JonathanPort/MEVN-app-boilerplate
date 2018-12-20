/*
|--------------------------------------------------------------------------
| router.js
|--------------------------------------------------------------------------
|
| This module loads all route files for the Express app.
|
*/

module.exports = (app) => {

    const express = require('express');
    const config = require('./../../utils/config');

    // Setup cors if enabled in comfig
    if (config('server.cors') === 'true') {

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });

    }

    // Load in API Routes
    app.use('/api', require('./../../routes'));


    // Load the static HTML file
    app.use(express.static('dist'))
    app.get('/', (req, res, next) => res.sendfile('./dist/index.html'));

}
