'use strict';


const Department = require('../models/department');
const handler = module.exports = {};



handler.getAll = function* () {
    const departments = yield Department.getAll();
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = departments;
};

handler.get = function* () {
    const department = yield Department.get(this.params.id);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = department;
};

handler.create = function* () {
    let {id, name} = this.params;
    const insertedId = yield Department.create(id, name);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = { status: 'OK', insertedId };
};


handler.update = function* () {
    let { id, name } = this.params;
    yield Department.update(id, name);
    this.status = 200;
    this.set('Content-Type', 'application/json');
    this.body = { status: 'OK' };
};
