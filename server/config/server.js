const env = require('./../utils/env');

module.exports = {


    /*
    |--------------------------------------------------------------------------
    | Application Host
    |--------------------------------------------------------------------------
    |
    | This value is the host the application will run on.
    |
    */

    host: env('SERVER_HOST', '127.0.0.1'),


    /*
    |--------------------------------------------------------------------------
    | Application Port
    |--------------------------------------------------------------------------
    |
    | This value is the port the application will run on.
    |
    */

    port: env('SERVER_PORT', '8080'),

    /*
    |--------------------------------------------------------------------------
    | Application SSL / HTTPS
    |--------------------------------------------------------------------------
    |
    | This value determines whether to use secure SSL / HTTPS or not.
    |
    */

    ssl: env('SERVER_SSL', false),

    /*
    |--------------------------------------------------------------------------
    | CORS
    |--------------------------------------------------------------------------
    |
    | Allow cross origin requests (Should only be enabled in dev!)
    |
    */

    cors: env('SERVER_CORS', false),

    /*
    |--------------------------------------------------------------------------
    | VueJS Dev Server Port
    |--------------------------------------------------------------------------
    |
    | VueJS Dev Server port (Used in ./vue.config.js)
    |
    */

    vuePort: env('SERVER_VUE_PORT', 8081),

    /*
    |--------------------------------------------------------------------------
    | Vue dev server SSL / HTTPS
    |--------------------------------------------------------------------------
    |
    | This value determines whether to use secure SSL / HTTPS or not.
    |
    */

    vueSsl: env('SERVER_VUE_SSL', false),


}