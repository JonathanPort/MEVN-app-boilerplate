/*
|--------------------------------------------------------------------------
| session.js
|--------------------------------------------------------------------------
|
| This module adds http session functionality to the Express app.
|
*/

module.exports = (app) => {

    const session = require('express-session');

    app.use(session({
        // secret: config.get('session.secret'),
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        // store: config.get('memoryStore') ? new session.MemoryStore() : false,
        store: false
    }));

}