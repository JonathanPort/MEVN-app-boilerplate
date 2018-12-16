const BaseController = require('./../framework/controller/BaseController');

class AboutController extends BaseController {

    constructor(req, res) {
        super(req, res)
    }

    index() {

        this.res.send('About page!');

    }

}


module.exports = AboutController;