/**
 * API Routes
 *  /departments
 */
'use strict';

const router = require('koa-router')({
    prefix: '/api'
});

const DepartmentsController = require('./departments-controller');

router.get('/departments',    DepartmentsController.getAll);
router.post('/department',    DepartmentsController.create);
router.get('/department/:id', DepartmentsController.get);
router.put('/department/:id', DepartmentsController.update);



module.exports = router.middleware();
