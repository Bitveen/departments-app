/**
 * API entry point
 */

'use strict';

const koa        = require('koa');
const Sequelize  = require('sequelize');
const sequelize  = require('../config/db');



const app = module.exports = koa();


// app.use(function* mysqlConnection(next) {

// });


/**
 * Connect routes
 */
app.use(require('./routes'));
