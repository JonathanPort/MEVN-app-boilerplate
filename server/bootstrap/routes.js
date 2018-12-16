module.exports = [

    /*
    |--------------------------------------------------------------------------
    | Application routes
    |--------------------------------------------------------------------------
    |
    | This module sets up application routes into groups. For each group of
    | routes needed for the application, create a new file in the routes
    | directory and require it here with the route URI prefix as the index.
    |
    */

    { uri: '/', file: require('./../routes/home') },
    { uri: '/', file: require('./../routes/auth') },
    { uri: '/about', file: require('./../routes/about') },

];
