/**
 * Created by 胡志甫 on 2017/9/18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DreamSchema = new Schema({
    id: Number,
    dream_name: { type : String, trim : true },
    plan_time: { type : String, trim : true },
    task_nums:Number,
    complete_percentage: Number,
    pic_nums:Number,
    watcher_nums:Number,
    dream_person: { type : String, trim : true },
    img_url: { type : String, trim : true }
});
module.exports =mongoose.model('dreams', DreamSchema);