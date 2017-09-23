/**
 * Created by 胡志甫 on 2017/9/14.
 */
const _service=require('../../service');
const dreamSequelize = require('../../models/index').dreams;

module.exports = {

  getDreams:  async (ctx)=> {
    let body={code:'01',result:''};
    try{
      let current = ctx.request.body.current_page || 1;
      let page_size=ctx.request.body.page_size||10;
      let condition = {
        limit: [(current - 1) * page_size, +page_size],
      }
      if(ctx.request.body.sort){
        (ctx.request.body.sort==='pop')&&(condition.order=[['watcher_nums','DESC']]);
        (ctx.request.body.sort==='last')&&(condition.order=[['created_on','DESC']]);
      }
      let result = await _service.findAndCountAll(dreamSequelize, condition);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      ctx.body=body;
    }
  },
}
