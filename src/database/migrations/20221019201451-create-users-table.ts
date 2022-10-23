/* eslint-disable */
import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
	up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		return queryInterface.createTable('users', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
				unique: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
				defaultValue: null,
			},
		});
	},

	down(queryInterface: QueryInterface) {
		return queryInterface.dropTable('users');
	},
};
