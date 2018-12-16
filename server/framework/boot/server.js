#!/usr/bin/env node

/*
|--------------------------------------------------------------------------
| server.js
|--------------------------------------------------------------------------
|
| This module sets up and starts the server.
|
*/

module.exports = (app) => {


    const http = require('http');
    const debug = require('./../../utils/debug');
    const config = require('./../../utils/config');


    /**
     * Set port
     */
    const port = config('server.port');
    app.set('port', port);


    /**
     * Create HTTP server.
     */
    const server = http.createServer(app);


    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port);


    /**
     * Listen for error
     */
    server.on('error', (error) => {

        if (error.syscall !== 'listen') throw error;

        const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

        // handle specific listen errors with friendly messages
        switch (error.code) {
            case 'EACCES':
                debug(bind + ' requires elevated privileges');
                process.exit(1);
            break;
            case 'EADDRINUSE':
                debug(bind + ' is already in use');
                process.exit(1);
            break;
            default:
                throw error;
        }
    });


    /**
     * Listening event
     */
    server.on('listening', () => {

        const addr = server.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

        debug('Node Server started! Listening on ' + bind);

    });

}