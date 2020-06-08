/**
 * @fileoverview 实现Demo数据模型
 * @author nicolv
 */
class Demo {
  /**
   * Demo的类，获取后台有关于Demo的相关数据类
   * @class
   */

  /**
   * @constructor
   * @param {object} app Koa2的执行上下文
   */
  constructor(app) {
    this.app = app;
  }

  /**
   * 获取后台全部Demo列表的接口
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData(options)
   */
  getData(options) {
    return Promise.resolve({
      message: '数据请求成功',
      data: 'demo 列表'
    });
  }

}

module.exports = Demo;