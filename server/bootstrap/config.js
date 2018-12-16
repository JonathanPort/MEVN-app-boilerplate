module.exports = {


    /*
    |--------------------------------------------------------------------------
    | Bootstrap Application Config Files
    |--------------------------------------------------------------------------
    |
    | Register all application config files here and they will be availble
    | in the global App.config object and also available to call from the
    | App.utils.config function.
    |
    */

    app: require('./../config/app'),
    server: require('./../config/server'),
    db: require('./../config/db'),


}