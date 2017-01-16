
'use strict';

const Department = module.exports = {};

/**
 * Returns Department details
 *
 * @param  {number} id Department id
 * @return {object}    Department details
 */
Department.get = function* (id) {
    const [departments] = yield global.db.query('SELECT * FROM departments WHERE id=:id', { id });
    return departments[0];
};


/**
 * Department - description
 *
 * @param  {type} id   description
 * @param  {type} name description
 * @return {type}      description
 */
Department.update = function* (id, name) {
    // TODO: validation params
    try {
        yield global.db.query('UPDATE departments SET name=:name WHERE id=:id', { name, id });
    } catch(e) {
        // TODO: throw error;
    }
};


/**
 * Department - description
 *
 * @param  {type} name description
 * @return {type}      description
 */
Department.create = function* (name) {
    // TODO: validation params
    try {
        console.log(name);
        const [result] = yield global.db.query(`INSERT INTO departments(name) VALUES(:name)`, {name});
        return result.insertId;
    } catch(e) {
        // TODO: throw errors
    }
};


/**
 * Department - description
 *
 * @return {type}  description
 */
Department.getAll = function* () {
    const [departments] = yield global.db.query('SELECT * FROM departments ORDER BY id');
    return departments;
};
