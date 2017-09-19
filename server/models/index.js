/**
 * Created by 胡志甫 on 2017/9/14.
 */
const config = require('../config');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const username = config.database.username;
const password = config.database.password;
const options = { // TODO -- pull from config
    host: config.database.host,
    dialect: "mysql",
    timezone: "+08:00",
    dialectOptions: {
        charset: "utf8",
        collate: "utf8_general_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    port: 3306,
    define: {
        freezeTableName: true,
        syncOnAssociation: true,
        timestamps: false,
        underscored: true
    },
};


const client = new Sequelize(config.database.db, username, password, options);


const models = {};

fs
    .readdirSync(__dirname + '/')
    .filter((file)=> {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach((file)=> {
        let model = client.import(path.join(__dirname + '/', file));
        models[model.name] = model;
    });

Object.keys(models).forEach((modelName)=> {
    if (models[modelName].options.hasOwnProperty('associate')) {
        models[modelName].options.associate(models);
    }
});

module.exports = models;
module.exports.client = client;

