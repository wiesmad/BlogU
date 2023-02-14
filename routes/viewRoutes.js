const express = require('express');
const router = express.Router();
const protect = require('../middlewares/protect');

const { render_users } = require('../controllers/viewController');

router.get('/', protect, render_users);

module.exports = router;
