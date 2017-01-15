'use strict';

const koa = require('koa');

const app = module.exports = koa();

app.use(function* mysqlConnection(next) {
    try {
        console.log(this.request.url);

        this.state.db = global.db = yield global.connectionPool.getConnection();
        this.state.db.connection.config.namedPlaceholders = true;
        yield this.state.db.query('SET SESSION sql_mode = "TRADITIONAL"');

        yield next;

        this.state.db.release();

    } catch(e) {
        if (this.state.db) {
            this.state.db.release();
            throw e;
        }
    }
});



app.use(require('./api-routes'));
