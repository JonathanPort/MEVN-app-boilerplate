module.exports = {

    /*
    |--------------------------------------------------------------------------
    | Bootstrap Server Boot Files
    |--------------------------------------------------------------------------
    |
    | Register all server modules here and they will be initialised in the
    | server.js file.
    |
    | Note: Be careful with the order with some of these modules.
    | The crsf module for example requires cookieParser and bodyParser
    | to be initialized first. The server module should definately
    | be loaded last!
    |
    */

    logger: require('./../framework/boot/logger'),
    viewEngine: require('./../framework/boot/viewEngine'),
    bodyParser: require('./../framework/boot/bodyParser'),
    cookieParser: require('./../framework/boot/cookieParser'),
    csrf: require('./../framework/boot/csrf'),
    session: require('./../framework/boot/session'),
    promiseRejectionWrapper: require('./../framework/boot/promiseRejectionWrapper'),
    router: require('./../framework/boot/router'),
    errorHandling: require('./../framework/boot/errorHandling'),
    db: require('./../framework/boot/database'),
    server: require('./../framework/boot/server'),

}