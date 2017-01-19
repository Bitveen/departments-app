/**
 * App entry point
 * SubApps:
 *         api - app for handle api calls
 */

'use strict';

const koa        = require('koa');
const bodyParser = require('koa-bodyparser');
const compose    = require('koa-compose');
const compress   = require('koa-compress');
const serve      = require('koa-static');

const app = module.exports = koa();




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



/**
 * Unhandled server errors
 */
app.on('error', function(err, ctx) {
    console.error(err, ctx);
});



if (!module.parent) {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`Server listening...`);
    });
}
