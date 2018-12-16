/*
|--------------------------------------------------------------------------
| promiseRejectionWrapper.js
|--------------------------------------------------------------------------
|
| This module adds promise rejection error handling to the express app.
|
*/

const messages = require('../../utils/messages');

const wrapPromise = (promise) => {
    promise.catch(e => {
        console.error(e);
        this.status(500);
        this.json(messages.ERROR_UNEXPECTED);
    });

    return promise;
};

module.exports = (app) => {

    app.use((req, res, next) => {
        res.wrapPromise = wrapPromise;
        next();
    });

}