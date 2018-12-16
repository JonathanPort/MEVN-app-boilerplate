const router = require('./../framework/router')();
const Test = require('./test');

// let testClass = new Test;

// console.log(testClass.testMethod());



// testClass.get('/test', function (req, res) {
//     console.log('Hello test');
// });

router.get('/', 'HomeController@index');
router.post('/', 'HomeController@indexPost');


// router.request('get', );
// module.exports = testClass;
module.exports = router.expressInstance();
