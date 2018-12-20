const BaseController = require('./../framework/controller/BaseController');


class HomeController extends BaseController {


    /**
     * Start controller instance!
     */
    constructor(req, res) {
        super(req, res);
    }


    /**
     * Shows the index page.
     */
    index() {

        this.res.send({
            _token: this.req.csrfToken()
        });

    }

    indexPost() {
        this.res.send(this.req.body);
    }

}


module.exports = HomeController;