class IndexController {
  constructor() {

  }

  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('index', {
      data: 'demo'
    })
  }
}

module.exports = IndexController;