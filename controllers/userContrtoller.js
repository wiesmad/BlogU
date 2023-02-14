const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

module.exports.show_users = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: req.user,
    });
  } catch (err) {
    res.json({
      status: 'fail',
      error: err.message,
    });
  }
};

module.exports.user_profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  user.password = undefined;
  try {
    return res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err.message,
    });
  }
};

module.exports.register_user = async (req, res, next) => {
  const { firstName, lastName, profilePhoto, email, password } = req.body;
  try {
    //check email
    const user = await User.findOne({ email });
    if (user) {
      return next(new AppError('User already exists!', 500));
    }
    //create user
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };
    await User.create(newUser);

    res.status(201).json({
      status: 'success',
      data: newUser,
    });
  } catch (err) {
    next(new Error(err));
    // res.status(400).json({
    //   status: 'fail',
    //   error: err.message,
    // });
  }
};

module.exports.login_user = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password); //static method
    const id = user._id;
    const token = await jwt.sign({ id }, process.env.JWT_SECRET);
    // res.cookie('jwt', token, {
    //   expires: 1000 * 60 * 60 * 24,
    //   httpOnly: true,
    // });

    res.status(200).json({
      status: 'success',
      data: {
        firstname: user.firstName,
        lastname: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token,
      },
    });
  } catch (err) {
    return next(new AppError('Incorrect login or password!', 400));
  }
};

module.exports.update_user = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'user updated',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      error: err.message,
    });
  }
};

module.exports.delete_user = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'user deleted',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      error: err.message,
    });
  }
};
