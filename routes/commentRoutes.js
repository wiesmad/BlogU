const express = require('express');
const router = express.Router();

const {
  show_comments,
  get_comment,
  create_comment,
  update_comment,
  delete_comment,
} = require('../controllers/commentController');

router.get('/', show_comments);

router.get('/:id', get_comment);

router.post('/', create_comment);

router.put('/:id', update_comment);

router.delete('/:id', delete_comment);

module.exports = router;
