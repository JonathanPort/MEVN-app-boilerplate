const router = require('./../framework/router')();

router.get('/login', 'AuthController@loginPage');
router.post('/login', 'AuthController@loginPost');

module.exports = router.expressInstance();
