/**
 * Errors handlers helpers
 *
 */

'use strict';

const errorHandler = module.exports = {};
errorHandler.log = (err, ctx) => {
    ctx.status = err.status;
    ctx.set('Content-Type', 'application/json');
    ctx.body = { status: err.status, message: err.message };
};
