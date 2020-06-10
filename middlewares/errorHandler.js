const errorHandler = {
  error(app, logger) {
    app.use(async (ctx, next) => {
      
      try {
        await next();
      } catch (error) {
        logger.error(error)
        ctx.status = ctx.status || '500';
        ctx.body = '500啦😭'
      }

    })
    
    app.use(async (ctx, next) => {

      await next();

      if (404 !== ctx.status) {
        return
      }

      ctx.status = 404; // 有些网站会重新生成200，是为了防止百度会降权；
      ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>`
    })
  }
}

module.exports = errorHandler;