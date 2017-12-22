/**
 * Created by 胡志甫 on 2017/12/3.
 */
const _service = require('../../service');
const userSequelize = require('../../models/index').users;

module.exports = {
  addUser: async (ctx) => {
    let body = {code: '01', result: ''};
    try {
      let username = ctx.request.body.username;
      let password = ctx.request.body.password;
      let userModel = {
        username, password
      };
      let result = await _service.create(userSequelize, userModel);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      ctx.body = body;
    }
  },
  findUser: async (ctx) => {
    let body = {code: '01', result: ''};
    try {
      let username = ctx.request.body.username;
      let password = ctx.request.body.password;
      let condition = {
        attributes: ['username', 'password'],
        where: {username}
      };
      let user = await _service.findOne(userSequelize, condition);
      if (user) {
        if (user.password === password) {
          body.result = user;
        } else {
          body.code = '02';
          body.result = '密码输入有误';
        }
      } else {
        body.code = '02';
        body.result = '用户不存在,请先注册';
      }
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      ctx.body = body;
    }
  },
  getUsers: async (ctx) => {
    let body = {code: '01', result: ''};
    try {
      let current = ctx.request.query.current_page || 1;
      let page_size = ctx.request.query.page_size || 10;
      let condition = {
        limit: [(current - 1) * page_size, +page_size]
      };
      let result = await _service.findAndCountAll(userSequelize, condition);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      ctx.body = body;
    }
  },
  destoryUser: async (ctx) => {
    let body = {code: '01', result: ''};
    try {
      let condition = {
        where: {username: ctx.request.body.username}
      };
      let result = await _service.deleteAll(userSequelize, condition);
      body.result = result;
    } catch (e) {
      body.code = '02';
      body.result = e.message;
    } finally {
      ctx.body = body;
    }
  }
};
