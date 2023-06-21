// Imports the Product model
const Product = require('./Product');

// Imports the Category model
const Category = require('./Category');

// Imports the Tag model
const Tag = require('./Tag');

// Imports the ProductTag model
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category,{
  // Defines the foreign key column in the Product model
  foreignKey:'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  // Defines the foreign key column in the Product model
  foreignKey:'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Specifies the intermediate model
  through: ProductTag,
  // Defines the foreign key column in the model
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Specifies the intermediate model
  through: ProductTag,
  // Defines the foreign key column in the model
  foreignKey: 'tag_id',
});

// Exporting the models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,

};
