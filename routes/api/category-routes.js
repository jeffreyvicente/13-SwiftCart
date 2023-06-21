// Imports the Router class
const router = require('express').Router();
// Importing the Category and Product models
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // Finds all categories
  // Includes its associated Products
  try {
    const categoryData = await Category.findAll({
      include:[Product]
    });
    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Finds one category by its `id` value
  // Include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include:[Product]
    });

    //Checks if the category is part of the database
    if (!categoryData){
      res.status(404).json({message: 'No category found with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // Creates a new category
  try{
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Updates a category by its `id` value
  try{
    const categoryData = await Category.update(req.body,{
      where: {
        id: req.params.id
      },
    });
    
    //Checks if the category is part of the database
    if (!categoryData[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(categoryData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    //Checks if the category is part of the database
    if(!categoryData) {
      res.status(404).json({message: 'No category found with this id!!'});
      return;
    }

    res.status(200).json(categoryData);

  }catch(err){
    res.status(500).json(err);
  }
});

// Exporting the router model
module.exports = router;
