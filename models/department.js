module.exports = (sequelize, DataTypes) => {
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
                is: ["^[a-z]+$",'i'],
                notNull: true,
                notEmpty: true
            }
        }
    }, {
        tableName: 'departments',
        comment: 'Table to store departments info'
    });
};