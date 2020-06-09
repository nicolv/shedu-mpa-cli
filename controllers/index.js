const router = require('koa-simple-router');

const IndexController = require('@controllers/IndexController');
const ApiController = require('@controllers/ApiController');

const indexController = new IndexController();
const apiController = new ApiController();

module.exports = app => {
  app.use(router(_ => {
    _.get('/', indexController.actionIndex)
    _.get('/index.html', indexController.actionIndex)
    _.get('/api/list', apiController.actionIndex)
  }));
}