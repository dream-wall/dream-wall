/**
 * Created by 胡志甫 on 2017/9/14.
 */
const router = require('koa-router')();

const dreamsRouter = require('./dream')(router);
const usersRouter = require('./user')(router);

module.exports = router.middleware();
