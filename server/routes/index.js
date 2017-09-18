/**
 * Created by 胡志甫 on 2017/9/18.
 */
var express=require('express');
var router = express.Router();

var dreamsRouter = require('./dream')(router);

module.exports=router;