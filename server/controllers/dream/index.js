/**
 * Created by 胡志甫 on 2017/9/18.
 */
var dreams = require('../../models/dreams');
var _service = require('../../service');

module.exports = {

  getDreams:  async (req,res,next)=> {
    var body={code:'01',result:''};
    try{
      var current = req.body.current_page || 1;
      var page_size=req.body.page_size||10;
      var options = {
        current,
        page_size,
        find_con:{}
      }
      var result = await _service.findAndCountAll(dreams, options);
      body.result=result;
    }catch (e) {
      body.code='02';
      body.result=e.message;
    }finally {
      res.json(body);
    }
  },
}
