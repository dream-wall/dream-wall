/**
 * Created by 胡志甫 on 2017/9/14.
 */
module.exports = function (sequelize, DataTypes) {
    let dreams = sequelize.define('dreams',{
        id: {type: DataTypes.INTEGER(3), allowNull: false, primaryKey: true,autoIncrement: true,comment: '主键ID'},
        dream_name:{type:DataTypes.STRING(255),allowNull:true,comment: '造梦名称'},
        plan_time:{type:DataTypes.STRING(255),allowNull:true,comment: '达成时间'},
        task_nums:{type:DataTypes.INTEGER(4),allowNull:true,comment: '任务数'},
        complete_percentage:{type:DataTypes.INTEGER(3),allowNull:true,comment: '完成度'},
        pic_nums:{type:DataTypes.INTEGER(10),allowNull:true,comment: '图片数量'},
        watcher_nums:{type:DataTypes.INTEGER(10),allowNull:true,comment: '关注人数'},
        dream_person:{type:DataTypes.STRING(255),allowNull:true,comment: '追梦人'},
        img_url:{type:DataTypes.STRING(255),allowNull:true,comment: '图片路径'},
        created_on: {type: DataTypes.DATE, allowNull: false, defaultValue: sequelize.fn('NOW'),comment:'梦想创建时间'},
    });
    return dreams;
}
