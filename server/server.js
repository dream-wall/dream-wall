/**
 * Created by 胡志甫 on 2017/9/14.
 */
const Koa = require('koa');
const cors = require('koa-cors');// 跨域处理
const bodyparser = require('koa-bodyparser');// 传参获取
const compress = require('koa-compress');// 传输压缩
const mount = require('koa-mount');// 路由mount
const convert = require('koa-convert');// generator 中间件在koa v2中需要用koa-convert封装一下才能使用，这与koa1不同

const config = require('./server/config');
const app = new Koa();

app.use(convert(bodyparser()));
app.use(convert(compress({})));
app.use(convert(cors()));

app.use(async (ctx, next) => {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log(`${ctx.method}, ${ctx.url}, ${ms}`);
});

// 错误监听
app.on('error', (err, ctx) => {
  console.error('error', err);
});
// 挂载路由
app.use(mount('/api/v1', require('./server/routes')));

/*
 const client=require('./server/models').client;
const connection =  client.sync({
    logging: console.log
});同步表结构 */

app.listen(config.port, () => {
  console.log('%s BackEnd Server is running on: http://%s:%s', config.appName, config.host, config.port);
});
