module.exports = (message) => {

    // Require utils config module
    const config = require('./config');

    // If app debug turned off, return false
    if (! config('app.debug')) return false;

    // Get app name, removing any spaces
    let appName = config('app.name');
    appName = appName.replace(/\s+/g, '');

    // Setup app name in env
    process.env['DEBUG'] = appName;

    // Return main debug module and set app name
    return require('debug')(appName)(message);


}