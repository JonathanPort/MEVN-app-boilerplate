const env = require('./../utils/env');

module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Host
    |--------------------------------------------------------------------------
    |
    | This is the URI used to connect to the database with.
    |
    */

    host: env('DB_HOST', 'mongodb://localhost/express'),


}