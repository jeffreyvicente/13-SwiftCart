// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import our database connection from config.js
const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
   // Defines the database columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    // Assigning the Sequelize instance to the 'sequelize' property
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Setting the model name to 'product_tag'
    modelName: 'product_tag',
  }
);

// Exporting the ProductTag model
module.exports = ProductTag;
