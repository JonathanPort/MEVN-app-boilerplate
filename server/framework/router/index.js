class Router {


    constructor() {

        this.expressRouter = require('express').Router();
        this.Request = require('./Request');

    }

    // group(uri) {
    //     this.expressRouter.use(uri, this.expressInstance());
    // }

    checkout(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'checkout'); }

    copy(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'copy'); }

    delete(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'delete'); }

    get(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'get'); }

    head(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'head'); }

    lock(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'lock'); }

    merge(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'merge'); }

    mkactivity(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'mkactivity'); }

    mkcol(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'mkcol'); }

    move(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'move'); }

    msearch(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'msearch'); }

    notify(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'notify'); }

    options(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'options'); }

    patch(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'patch'); }

    post(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'post'); }

    purge(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'purge'); }

    put(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'put'); }

    report(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'report'); }

    search(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'search'); }

    subscribe(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'subscribe'); }

    trace(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'trace'); }

    unlock(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'unlock'); }

    unsubscribe(uri, handler) { this.expressRouter = this.performRequest(uri, handler, 'unsubscribe'); }

    performRequest(uri, handler, type) {
        return new this.Request(uri, handler, this.expressRouter, type);
    }

    expressInstance() {
        return this.expressRouter;
    }

}


module.exports = function () {
    return new Router;
};