/**
 * Controller for API Departments
 */
'use strict';

const sequelize  = require('../../config/db');
const Department = sequelize.import('../../models/department');
const handler    = module.exports = {};
const errorUtils = require('../../utils/errorHandler');

/**
 * Get all departments from database
 *
 * GET /api/departments
 *
 * @return {JSON}  JSON representation of all departments
 */
handler.getAll = function* () {
    try {
        const departments = yield Department.findAll();
        this.status = 200;
        this.set('Content-Type', 'application/json');
        this.body = departments;
    } catch(e) {
        errorUtils.log(e, this);
    }
};

/**
 * Get one department by id from database
 *
 * GET /api/department/:id
 *
 * @return {JSON}  JSON representation of one department
 */
handler.get = function* () {
    try {
        const department = yield Department.findById(this.params.id);
        if (!department) this.throw(404, 'Not found');
        this.status = 200;
        this.set('Content-Type', 'application/json');
        this.body = department;
    } catch (e) {
        errorUtils.log(e, this);
    }
};

/**
 * Create department with given name
 *
 * POST /api/department
 *
 * @return {JSON}  Newly created department
 */
handler.create = function* () {
    try {
        let { name } = this.request.body;
        const savedDepartment = yield Department.create({ name });
        const department = savedDepartment.get();
        this.status = 201;
        this.set('Content-Type', 'application/json');
        this.set('Location', `/api/department/${department.id}`);
        this.body = department;
    } catch (e) {
        errorUtils.log(e, this);
    }
};


/**
 * Update an existing department by id
 *
 * PUT /api/department/:id
 *
 * @return {JSON}  Updated department
 */
handler.update = function* () {
    try {
        let {id} = this.params;
        let {name} = this.request.body;
        const existingDepartment = yield Department.findById(id);
        if (!existingDepartment) this.throw(404, 'Not found');
        const updatedDepartment = yield existingDepartment.update({ name });
        const department = updatedDepartment.get();
        this.status = 200;
        this.set('Content-Type', 'application/json');
        this.set('Location', '/api/department/${department.id}');
        this.body = department;
    } catch (e) {
        errorUtils.log(e, this);
    }
};
