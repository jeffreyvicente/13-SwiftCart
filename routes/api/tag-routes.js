// Creates an instance of Express router
const router = require('express').Router();

// Importing the Tag, ProductTag and Product models
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // Finds all tags
  // Include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // Find a single tag by its `id`
  // Include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [Product]
    });

    //Checks if the Tag is part of the database
    if(!tagData){
      res.status(404).json({message: 'No Tag found with this id!'});
      return;
    }

    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // Creates a new tag
  try {

    const tagData = await Tag.create(req.body);
   
    res.status(200).json(tagData);

  }catch(err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Updates a tag's name by its `id` value
  try {

    const tagData = await Tag.update(req.body,{
      where: {
        id: req.params.id
      },
    });

    //Checks if the Tag is part of the database
    if (!tagData[0]) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }

    res.status(200).json(tagData);

  }catch(err){
    res.status(500).json(err);
  }
});

router.delete('/:id',async (req, res) => {
  // Deletes on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    //Checks if the Tag is part of the database
    if(!tagData){
      res.status(404).json({message: 'No tag found with this id!'});
      return;
    }

    res.status(200).json(tagData);

  }catch(err){
    res.status(500).json(err);
  }
});

// Exporting the router model
module.exports = router;
