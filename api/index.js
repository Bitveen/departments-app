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


/**
 * Not found handler
 * Runs when no one route is matches
 */
app.use(function* notFound() {
    this.status = 404;
    this.set('Content-Type', 'application/json');
    this.body = { status: 404, message: 'Not found' };
});
