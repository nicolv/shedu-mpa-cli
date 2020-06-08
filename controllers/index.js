const router = require('koa-simple-router');

const DemoIndexController = require('@controllers/DemoIndexController');
const DemoController = require('@controllers/DemoController');
const demoIndexController = new DemoIndexController();
const demoController = new DemoController();

module.exports = app => {
  app.use(router(_ => {
    _.get('/', demoIndexController.actionIndex)
    _.get('/index.html', demoIndexController.actionIndex)
    _.get('/demo/list', demoController.actionIndex)
  }));
}