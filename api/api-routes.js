'use strict';

const router = require('koa-router')();

const departments = require('./api-departments');

router.get('/api/departments', departments.getAll);
router.get('/api/department/:id', departments.get);
router.post('/api/department', departments.create);
router.put('/api/department/:id', departments.update);


module.exports = router.middleware();
