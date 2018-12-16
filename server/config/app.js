const env = require('./../utils/env');

module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | The name of the application.
    |
    */

    name: env('APP_NAME', 'Express'),

    /*
    |--------------------------------------------------------------------------
    | Application Debug
    |--------------------------------------------------------------------------
    |
    | Sets whether app debug is turned on or not. Controls whether console
    | will output debug info.
    |
    */

    debug: env('APP_DEBUG', false),


}