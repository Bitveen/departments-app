'use strict';

const router = require('koa-router')();

router.get('/', function* () {
    yield this.render('index.html');
});

module.exports = router.middleware();
