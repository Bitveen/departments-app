'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return [
            queryInterface.createTable('departments', {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    allowNull: false,
                    primaryKey: true
                },
                name: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false
                }
            }),
            queryInterface.bulkInsert('departments', [
                { id: 1, name: 'Marketing' },
                { id: 2, name: 'Support' }
            ])
        ];
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('departments');
    }
};
