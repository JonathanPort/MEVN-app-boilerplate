const router = require('./../framework/router')();

router.get('/', 'AboutController@index');

module.exports = router.expressInstance();
