/**
 * Created by 胡志甫 on 2017/9/14.
 */
const _service = module.exports = {};

_service.findAndCountAll = async function (sequelize, condition) {
  return await sequelize.findAndCountAll(condition);
};

_service.findAll = async function (sequelize, condition) {
  return await sequelize.findAll(condition);
};

_service.findOne = async function (sequelize, condition) {
  return await sequelize.findOne(condition);
};

_service.findById = async function (sequelize, id) {
  return await sequelize.findOne({
    where: {
      id: id
    }
  });
};

_service.create = async function (sequelize, model) {
  return await sequelize.create(model);
};

_service.update = async function (sequelize, setStatement, condition) {
  return await sequelize.update(setStatement, condition);
};

_service.deleteAll = async function (sequelize, condition) {
  return await sequelize.destroy(condition);
};

_service.insertAll = async function (sequelize, articles) {
  return await sequelize.bulkCreate(articles);
};

_service.count = async function (sequelize, condition) {
  return await sequelize.count(condition);
};

_service.build = function (sequelize, articles) {
  return sequelize.build(articles);
};
