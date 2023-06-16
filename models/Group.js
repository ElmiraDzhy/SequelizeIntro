'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {

        static associate (models) {
            // define association here
        }
    }

    Group.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagePath: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Group',
        tableName: 'groups',
        underscored: true
    });
    return Group;
};