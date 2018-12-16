const Router = require('express').Router();
const Controller = require('./../framework/controller/ControllerResolver');


Router.get('/', (req, res) => {
    new Controller('HomeController@index', req, res);
});

Router.post('/', (req, res) => {
    new Controller('HomeController@indexPost', req, res);
});

module.exports = Router;
