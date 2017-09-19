/**
 * Created by 胡志甫 on 2017/9/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path=require('path');
var http = require('http');
var mongoose = require('mongoose');
var cors = require('cors');
var fs=require('fs');

var router=require('./server/routes');
var config=require('./server/config')
var app = express();
var port = process.env.PORT || config.port;

//body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// 将路由用至应用程式
app.use('/api/v1', router);


connect()
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);

function listen () {
    var httpServer = http.createServer(app);
    httpServer.listen(port, '0.0.0.0', function () {
        console.log('%s BackEnd Server is running on: http://%s:%s', config.appName,config.host, port);
    });
    httpServer.on('error', onError);
}

function  connect () {
    mongoose.Promise = global.Promise; //resolve a bug that mpromise is deprecated,plug in your own promise library instead
    return mongoose.connect('mongodb://'+config.database.host+'/'+config.database.db, {
        useMongoClient: true,
    });
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    //处理特殊error 的友好信息
    switch (error.code) {
        case 'EACCES':
            console.error('requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('端口被占用!');
            process.exit(1);
            break;
        default:
            throw error;
    }
}