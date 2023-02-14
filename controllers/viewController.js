const User = require('../models/User');

module.exports.render_users = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).render('users', { users });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      data: err.message,
    });
  }
};
