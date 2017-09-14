/**
 * Created by 胡志甫 on 2017/9/14.
 */
const router = require('koa-router')();

const dreamsRouter = require('./dream')(router);

module.exports = router.middleware();