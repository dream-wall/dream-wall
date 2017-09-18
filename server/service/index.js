/**
 * Created by 胡志甫 on 2017/9/18.
 */
var _service = module.exports = {};

_service.findAndCountAll = async function (modelObj, options) {
  return {
    rows:await modelObj.find(options.find_con)
        .limit(options.page_size)
        .skip(options.page_size * (options.current-1))
        .exec(),
    count:await modelObj.find(options.find_con).count()
  };
}
