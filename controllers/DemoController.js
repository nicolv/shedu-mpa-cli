const Demo = require('@models/Demo')

class DemoController {
  constructor() {

  }

  async actionIndex(ctx) {
    const demo = new Demo();
    const result = await demo.getData();
    ctx.body = result
  }

  async actionUpdate(ctx, next) {

  }

  async actionDelete(ctx, next) {

  }

  async actionAdd(ctx, next) {

  }
}

module.exports = DemoController;