'use strict';


const koa = require('koa');
const serve = require('koa-static');
const handlebars = require('koa-handlebars');



const app = module.exports = koa();

app.use(serve('public'));

app.use(handlebars({
    extension:   [ 'html', 'handlebars' ],
    viewsDir:    './www/views',
    partialsDir: './www/views'
}));



app.use(require('./www-routes'));


app.use(function* handleErrors(next) {
    try {
        yield next;
    } catch(e) {
        this.status = e.status || 500;
        switch (this.status) {
            case 404:
                this.body = 'Not Found';
                break;
            default:
            case 500:
                console.error(e.status || '500', e.message);
                this.body = 'Internal server error';
                this.app.emit('error', e, this);
                break;
        }
    }
});


app.use(function* notFound() {
    this.throw(404);
});
