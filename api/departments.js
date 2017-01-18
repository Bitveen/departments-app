/**
 * Controller for API Departments
 */
'use strict';

const sequelize = require('../config/db');
const Department = sequelize.import('../models/department');
const handler = module.exports = {};


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
        this.throw(e);
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
        this.status = 200;
        this.set('Content-Type', 'application/json');
        this.body = department;
    } catch (e) {
        this.throw(e);
    }
};

/**
 * Create department with given name
 *
 * POST /api/department
 *
 * @return {type}  description
 */
handler.create = function* () {
    try {
        let { name } = this.request.body;
        yield Department.create({ name });
        this.status = 201;
        this.set('Content-Type', 'application/json');
        this.set('Location', `/api/department/`);
        //this.body = { id: insertedId, name: name };
    } catch (e) {
        this.throw(e);
    }
};


/**
 * Update an existing department by id
 *
 * PUT /api/department/:id
 *
 * @return {type}  description
 */
handler.update = function* () {
    let { id } = this.params;
    let { name } = this.request.body;
    yield Department.update(id, name);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = { id, name };
};
