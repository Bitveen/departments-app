/**
 * App entry point
 * SubApps:
 *         api - app for handle api calls
 */

'use strict';

const koa        = require('koa');
const bodyParser = require('koa-bodyparser');
const mysql      = require('mysql2/promise');
const compose    = require('koa-compose');
const compress   = require('koa-compress');
const serve      = require('koa-static');
const config     = require('./config');

const app = module.exports = koa();

/**
 * Database connection
 * global - for access from another apps
 */
global.connectionPool = mysql.createPool(config);



/**
 * Middlewares
 */
app.use(compress({}));
app.use(bodyParser());
app.use(serve('public'));




app.use(function* subApp(next) {
    this.state.subapp = this.request.url.split('/')[1];
    yield next;
});


/**
 * Compose app into subapps
 */
app.use(function* composeSubapp() {
    switch (this.state.subapp) {
        case 'api': yield compose(require('./api').middleware); break;
    }
});






if (!module.parent) {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server listening...`);
    });
}
