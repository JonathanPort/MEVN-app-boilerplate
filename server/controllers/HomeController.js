const BaseController = require('./../framework/controller/BaseController');
const mongoose = require('mongoose');
const User = require('./../models/User');

class HomeController extends BaseController {


    /**
     * Start controller instance!
     */
    constructor(req, res) {
        super(req, res)
    }


    /**
     * Shows the index page.
     */
    index() {

        this.res.render('index', { _token: this.req.csrfToken() });

    }

    indexPost() {
        this.res.send(this.req.body);
    }

}


module.exports = HomeController;