/**
 * Created by 胡志甫 on 2017/12/3.
 */
module.exports = function (sequelize, DataTypes) {
  let users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER(3), allowNull: false, primaryKey: true, autoIncrement: true, comment: '主键ID'},
    username: {type: DataTypes.STRING(100), allowNull: false, comment: '用户姓名'},
    password: {type: DataTypes.STRING(128), allowNull: false, comment: '用户密码'},
    created_on: {type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.fn('NOW'), comment: '用户创建时间'}
  });
  return users;
};
