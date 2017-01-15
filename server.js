'use strict';

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const mysql = require('mysql2/promise');
const compose = require('koa-compose');
const compress = require('koa-compress');

const app = module.exports = koa();

const config = require('./config');
global.connectionPool = mysql.createPool(config);



app.use(compress({}));
app.use(bodyParser());

app.use(function* subApp(next) {
    this.state.subapp = this.request.url.split('/')[1];
    yield next;
});





app.use(function* composeSubapp() {
    switch (this.state.subapp) {
        case 'api': yield compose(require('./api/api-app').middleware); break;
        default:
            yield compose(require('./www/www-app').middleware); break;
    }
});






if (!module.parent) {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server listening...`);
    });
}
