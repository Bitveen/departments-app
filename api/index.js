/**
 * API entry point
 */

'use strict';

const koa = require('koa');
const app = module.exports = koa();


/**
 * Connect routes
 */
app.use(require('./departments/departments-routes'));
