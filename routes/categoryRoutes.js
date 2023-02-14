const express = require('express');
const router = express.Router();

const {
  show_categories,
  get_category,
  create_category,
  update_category,
  delete_category,
} = require('../controllers/categoryController');

router.get('/', show_categories);

router.get('/:id', get_category);

router.post('/', create_category);

router.put('/:id', update_category);

router.delete('/:id', delete_category);

module.exports = router;
