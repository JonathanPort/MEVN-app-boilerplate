const config = require('./server/utils/config');

module.exports = {

  devServer: {
    port: config('server.vuePort'),
    https: config('server.vueSsl') == 'true' ? true : false,
  }

}