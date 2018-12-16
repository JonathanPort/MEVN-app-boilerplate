/*
|--------------------------------------------------------------------------
| viewEngine.js
|--------------------------------------------------------------------------
|
| This module sets the Express application view engine.
|
*/

module.exports = (app) => {

    const handlebars = require('express-handlebars');
    const path = require('path');

    let viewDir = `${path.dirname(require.main.filename)}/public/views`;

    app.engine('.hbs', handlebars({extname: '.hbs'}));
    app.set('views', viewDir);
    app.set('view engine', '.hbs');

}