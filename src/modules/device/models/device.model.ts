import {
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	NonAttribute,
	Model,
	BelongsToGetAssociationMixin,
	BelongsToSetAssociationMixin,
	BelongsToCreateAssociationMixin,
} from 'sequelize';
import db from '@src/database/db';
import { Models } from '@src/models';
import User from '@user/models/user.model';

class Device extends Model<InferAttributes<Device, { omit: 'user' }>, InferCreationAttributes<Device, { omit: 'user' }>> {
	declare id?: number;
	declare client: string;
	declare ip?: typeof DataTypes.INET | string | null;
	declare user_id?: number | null;
	declare created_at?: Date;
	declare updated_at?: Date;
	declare deleted_at?: Date;

	declare getUser: BelongsToGetAssociationMixin<User>;
	declare setUser: BelongsToSetAssociationMixin<User, number>;
	declare createUser: BelongsToCreateAssociationMixin<User>;
	declare user?: NonAttribute<User>;

	public static associate(models: Models): void {
		this.belongsTo(models.User, {
			as: 'user',
		});
	}

	public toJSON() {
		return {
			id: Number(this.id),
			client: this.client,
			ip: this.ip,
			created_at: this.created_at?.getTime(),
		};
	}
}

Device.init(
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		client: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ip: {
			type: DataTypes.INET,
			allowNull: false,
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: true,
			references: {
				model: 'users',
				key: 'id',
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
		tableName: 'devices',
		sequelize: db,
	}
);

export default Device;
