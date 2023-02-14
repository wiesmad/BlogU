const express = require('express');
const router = express.Router();

const {
  show_posts,
  get_post,
  create_post,
  update_post,
  delete_post,
} = require('../controllers/postController');

router.get('/', show_posts);

router.get('/:id', get_post);

router.post('/', create_post);

router.put('/:id', update_post);

router.delete('/:id', delete_post);

module.exports = router;
