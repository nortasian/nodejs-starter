import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	NonAttribute,
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	HasManyAddAssociationsMixin,
	HasManySetAssociationsMixin,
	HasManyRemoveAssociationMixin,
	HasManyRemoveAssociationsMixin,
	HasManyHasAssociationMixin,
	HasManyHasAssociationsMixin,
	HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin,
	Model,
} from 'sequelize';
import db from '@src/database/db';
import { Models } from '@src/models';
import Device from '@device/models/device.model';

class User extends Model<InferAttributes<User, { omit: 'devices' }>, InferCreationAttributes<User, { omit: 'devices' }>> {
	declare id: number;
	declare name: string;
	declare email: string;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	declare getDevices: HasManyGetAssociationsMixin<Device>;
	declare addDevice: HasManyAddAssociationMixin<Device, number>;
	declare addDevices: HasManyAddAssociationsMixin<Device, number>;
	declare setDevices: HasManySetAssociationsMixin<Device, number>;
	declare removeDevice: HasManyRemoveAssociationMixin<Device, number>;
	declare removeDevices: HasManyRemoveAssociationsMixin<Device, number>;
	declare hasDevice: HasManyHasAssociationMixin<Device, number>;
	declare hasDevices: HasManyHasAssociationsMixin<Device, number>;
	declare countDevices: HasManyCountAssociationsMixin;
	declare createDevice: HasManyCreateAssociationMixin<Device>;
	declare devices?: NonAttribute<Device[]>;

	public static associate(models: Models): void {
		this.hasMany(models.Device, {
			as: 'devices',
		});
	}

	public toJSON() {
		return {
			id: Number(this.id),
			name: this.name,
			email: this.email,
			devices: this.devices,
			created_at: this.created_at?.getTime(),
		};
	}
}

User.init(
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				min: 2,
				max: 150,
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: DataTypes.NOW,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null,
		},
	},
	{
		tableName: 'users',
		sequelize: db,
	}
);

export default User;
