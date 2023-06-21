// Creates an instance of Express router
const router = require('express').Router();

// Imports the category routes module
const categoryRoutes = require('./category-routes');

// Imports the product routes module
const productRoutes = require('./product-routes');

// Imports the tag routes module
const tagRoutes = require('./tag-routes');


// Mounts the category routes under the '/categories' path
router.use('/categories', categoryRoutes);
// Mounts the product routes under the '/products' path
router.use('/products', productRoutes);
// Mounts the tag routes under the '/tags' path
router.use('/tags', tagRoutes);

// Exports the router instance
module.exports = router;
