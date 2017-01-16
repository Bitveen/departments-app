/**
 * Controller for API Departments
 */
'use strict';


const Department = require('../models/department');
const handler = module.exports = {};


/**
 * Get all departments from model
 *
 * @return {type}  JSON representation of all departments
 */
handler.getAll = function* () {
    const departments = yield Department.getAll();
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = departments;
};

/**
 * Get one department by id
 *
 * @return {type}  description
 */
handler.get = function* () {
    const department = yield Department.get(this.params.id);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = department;
};

/**
 * Create department
 *
 * @return {type}  description
 */
handler.create = function* () {
    let { name } = this.request.body;
    const insertedId = yield Department.create(name);
    this.status = 201;
    this.set('Content-Type', 'application/json');
    this.body = { id: insertedId, name: name };
};


/**
 * Update existing department by id
 *
 * @return {type}  description
 */
handler.update = function* () {
    let { id, name } = this.params;
    yield Department.update(id, name);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = { status: 'OK' };
};
