'use strict';

/**
 * Schema for Department model
 *
 */


const Department = (sequelize, DataTypes) => {
    return sequelize.define('department', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [2, 255]
            }
        }
    });
};

module.exports = Department;
