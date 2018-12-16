const BaseController = require('./../framework/controller/BaseController');
const mongoose = require('mongoose');
const User = require('./../models/User');

class AuthController extends BaseController {


    /**
     * Start controller instance
     */
    constructor(req, res) {
        super(req, res)
    }


    loginPage() {

        this.res.render('login', { _token: this.req.csrfToken() });

    }


    loginPost() {

        // User.findByEmail('hello@jonathanport.com', function(err, record) {
        //     console.log(record);
        // });

        const passport = require('passport');
        const app = require('express')();
        // passport.authenticate('local');

        app.use(passport.authenticate('local'), function () {
            console.log('ds');
            next()
        })

        // console.log(this.req);

        this.res.send(this.req.body);
    }


    registerPage() {
        //
    }


    registerPost() {

        // User.create({
        //     firstName : 'Jonathan',
        //     lastName : 'Port',
        //     email: 'hello@jonathanport.com',
        //     password: 'secret',
        //     createdAt: Date.now()
        // }, function(err, User) {

        //     if (err) {
        //         console.error('Error creating User model');
        //         console.log(err);
        //     } else {
        //         console.log('User model created successfully!');
        //         console.log(User);
        //     }

        // });

    }


}


module.exports = AuthController;