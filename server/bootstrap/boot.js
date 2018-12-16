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

    logger: require('./../framework/middleware/logger'),
    viewEngine: require('./../framework/middleware/viewEngine'),
    cookieParser: require('./../framework/middleware/cookieParser'),
    bodyParser: require('./../framework/middleware/bodyParser'),
    csrf: require('./../framework/middleware/csrf'),
    promiseRejectionWrapper: require('./../framework/middleware/promiseRejectionWrapper'),
    session: require('./../framework/middleware/session'),
    auth: require('./../framework/middleware/auth'),
    router: require('./../framework/middleware/router'),
    errorHandling: require('./../framework/middleware/errorHandling'),
    db: require('./../framework/middleware/db'),
    server: require('./../framework/middleware/server')

}