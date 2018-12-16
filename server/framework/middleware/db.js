/*
|--------------------------------------------------------------------------
| db.js
|--------------------------------------------------------------------------
|
| This module sets up and starts the database.
|
*/

module.exports = (app) => {


    // Bring Mongoose into the app
    const mongoose = require('mongoose');
    const config = require('./../../utils/config');
    const debug = require('./../../utils/debug');

    // Get host
    const host = config('db.host');

    // Create the database connection
    mongoose.connect(host, {
        useNewUrlParser: true,
        useCreateIndex: true
    });

    // When successfully connected
    mongoose.connection.on('connected', () => debug('Mongoose connection open to: ' + host));

    // If the connection throws an error
    mongoose.connection.on('error', (err) => debug('Mongoose connection error: ' + err));

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => debug('Mongoose default connection disconnected'));

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            debug('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

}