/**
 * Errors handlers helpers
 *
 */

'use strict';

const errorHandler = module.exports = {};
errorHandler.log = (err, ctx) => {
    ctx.status = err.status || 400;
    ctx.set('Content-Type', 'application/json');
    ctx.body = { status: err.status || 400, message: err.message };
};
