/* eslint-disable */
import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
	up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		return queryInterface.createTable('devices', {
			id: {
				type: Sequelize.BIGINT,
				autoIncrement: true,
				allowNull: false,
				unique: true,
			},
			client: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			ip: {
				type: Sequelize.INET,
				allowNull: false,
			},
			user_id: {
				type: Sequelize.BIGINT,
				allowNull: true,
				references: {
					model: 'users',
					key: 'id',
				},
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
		return queryInterface.dropTable('devices');
	},
};
