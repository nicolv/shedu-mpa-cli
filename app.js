const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models',
  '@middlewares': __dirname + '/middlewares',
});

const Koa = require('koa');
const render = require('koa-swig');
const { port, viewDir, staticDir } = require('./config')
const co = require('co')
const log4js = require('log4js')
const app = new Koa();
const serve = require('koa-static')
// const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const errorHandler = require('@middlewares/errorHandler')

log4js.configure({
  appenders: { cheese: { type: 'file', filename: './logs/demo.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
})


const logger = log4js.getLogger('cheese')
logger.error('错误日志监听成功')
logger.fatal('毁灭性日志监听成功')

app.use(serve(staticDir))
// app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }));

app.context.render = co.wrap(render({
  root: viewDir,
  autoescape: true,
  cache: process.env.NODE_ENV == 'development' ? false : 'memory',
  ext: 'html',
  writeBody: false,
  varControls: ['[[', ']]'],
}))

// 错误处理
errorHandler.error(app, logger)

// 路由注册中心
require('@controllers')(app)

app.listen(port, () => {
  console.log('🍺 服务启动成功')
})