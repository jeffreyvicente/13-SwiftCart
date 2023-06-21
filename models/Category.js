// Imports Sequelize
const { Model, DataTypes } = require('sequelize');

// Imports Sequelize instance from connection
const sequelize = require('../config/connection.js');

// Creates a Category model that extends Sequelize's Model class
class Category extends Model {}

Category.init(
  {
    // Defines the database columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Assigning the Sequelize instance to the 'sequelize' property
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    // Setting the model name to 'category'
    modelName: 'category',
  }
);

// Exporting the Category model
module.exports = Category;
