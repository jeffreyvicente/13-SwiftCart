// Importing the Category model and assigning it to the constant Category
const { Category } = require('../models');

// Data to be seed into the database
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

// Exporting the seedCategories model
module.exports = seedCategories;
