'use strict';
/**
 * DB Connection
 */
const {database, username, password} = require('./config');

const Sequelize = require('sequelize');
const sequelize = module.exports = new Sequelize(database, username, password, {
    define: {
        timestamps: false,
        engine: 'MYISAM'
    }
});
