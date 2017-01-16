/**
 * API Routes
 */
'use strict';

const router = require('koa-router')({
    prefix: '/api'
});

const departments = require('./departments');

router.get('/departments', departments.getAll);
router.post('/department', departments.create);
router.get('/department/:id', departments.get);
router.put('/department/:id', departments.update);


module.exports = router.middleware();
