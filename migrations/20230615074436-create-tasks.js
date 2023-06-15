'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('tasks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                field: 'user_id',
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'users',
                    },
                    key: 'id'
                }
            },
            body: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isDone: {
                field: 'is_done',
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            deadline: {
                type: Sequelize.DATE,
            },
            createdAt: {
                field: 'created_at',
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                field: 'updated_at',
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },
    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('tasks');
    }
};