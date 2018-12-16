const express = require('express');

class Test extends express.Router {

    constructor() {
        super();
        console.log('Test Class constructor');
    }

    testMethod() {
        console.log('Test method!!!');
    }

}


module.exports = Test;