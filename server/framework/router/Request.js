const ControllerResolver = require('./../controller/ControllerResolver')

module.exports = class Request {

    constructor(uri, handler, router, type) {

        if (type == 'msearch') {
            router['m-search'](uri, (req, res) => this.resolveHandler(handler, req, res));
        }

        router[type](uri, (req, res) => this.resolveHandler(handler, req, res));

        return router;

    }


    resolveHandler(handler, req, res) {

        if (typeof handler == 'function') {

            return handler(req, res);

        } else {;

            return new ControllerResolver(handler, req, res);

        }

    }


}