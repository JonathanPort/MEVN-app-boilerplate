module.exports = class ControllerResolver {

    constructor(handler, req, res) {

        this.req = req;
        this.res = res;

        this.resolveHandlerString(handler);

    }


    resolveHandlerString(string) {

        let controllerName,
            methodName;

        string = string.split('@');

        if (string.length != 2) throw new Error('Missing or incorrect controller parameters');

        controllerName = string[0];
        methodName = string[1];

        const Controller = require('./../../controllers/' + controllerName);
        const ControllerInstance = new Controller(this.req, this.res);

        if (! ControllerInstance[methodName]) {
            throw new Error(`Method "${methodName}" does not exist in ${controllerName}`);
        }

        return ControllerInstance[methodName]();

    }


}