const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
	{
		// define columns
		// product_id: 1,
		// tag_id: 8,
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "product",
				key: "product_id",
				unique: false
			}
		},
		tag_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "tag",
				key: "tag_id",
				unique: false
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "product_tag",
	}
);

module.exports = ProductTag;
