const Router = require('express').Router();
const Controller = require('./../framework/controller/ControllerResolver');


Router.get('/', (req, res) => {
    new Controller('AboutController@index', req, res);
});

module.exports = Router;
