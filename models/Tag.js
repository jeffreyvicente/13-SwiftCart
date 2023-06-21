// Imports Sequelize
const { Model, DataTypes } = require('sequelize');

// Imports Sequelize instance from connection
const sequelize = require('../config/connection.js');

// Creates a Category model that extends Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    // Defines the database columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    // Assigning the Sequelize instance to the 'sequelize' property
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Setting the model name to 'tag'
    modelName: 'tag',
  }
);

// Exporting the Tag model
module.exports = Tag;
