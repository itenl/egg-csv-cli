const Controller = require('egg').Controller;
('use strict');

/**
 * @class IndexController
 * @des By IndexController
 * @author egg-cvs-cli
 * @extends {Controller}
 */
class IndexController extends Controller {
  constructor(prop) {
    super(prop);
  }
  async index() {
    const { ctx, service } = this;
    await ctx.render('ViewPath', {});
  }

  async byAjax() {
    const { ctx, service } = this;
    ctx.body = {
      result: 'ok'
    };
  }
}

module.exports = IndexController;
