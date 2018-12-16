const env = require('./../utils/env');

module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port the application will run on.
    |
    */

    port: env('SERVER_PORT', '3000'),


}