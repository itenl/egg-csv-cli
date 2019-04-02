const Service = require('egg').Service;
('use strict');

/**
 * @class IndexService
 * @des By IndexService
 * @author egg-cvs-cli
 * @extends {Service}
 */
class IndexService extends Service {
  async getIndexData() {
    return {
      success: 1,
      data: {},
      error: null
    };
  }
}

module.exports = IndexService;
