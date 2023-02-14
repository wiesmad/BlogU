const express = require('express');
const router = express.Router();
const protect = require('../middlewares/protect');

const {
  show_users,
  user_profile,
  register_user,
  login_user,
  update_user,
  delete_user,
} = require('../controllers/userContrtoller');

router.get('/', protect, show_users);

router.get('/profile/:id', protect, user_profile);

router.post('/register', register_user);

router.post('/login', login_user);

router.put('/:id', update_user);

router.delete('/:id', delete_user);

module.exports = router;
