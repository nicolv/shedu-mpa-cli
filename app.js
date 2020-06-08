const moduleAlias = require('module-alias');
moduleAlias.addAliases({
  '@controllers': __dirname + '/controllers',
  '@models': __dirname + '/models',
});

const Koa = require('koa');
const render = require('koa-swig');
const { port, viewDir, staticDir } = require('./config')
const co = require('co')
const app = new Koa();
const serve = require('koa-static')
app.use(serve(staticDir))
app.context.render = co.wrap(render({
  root: viewDir,
  autoescape: true,
  cache: process.env.NODE_ENV == 'development' ? false : 'memory',
  ext: 'html',
  writeBody: false,
  varControls: ['[[', ']]'],
}))

// 路由注册中心
require('@controllers')(app)

app.listen(port, () => {
  console.log('🍺 服务启动成功')
})