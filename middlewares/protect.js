const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/AppError');
// const { promisify } = require('util');

// Protect middleware function
const protect = async (req, res, next) => {
  // get token and check of it's there
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return next(new AppError('Incorrect token', 500));
    }

    //verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    //check if user still exists
    const currentUser = await User.findById(decoded.id);
    currentUser.password = undefined;
    if (!currentUser) {
      return next('User not exists!', 401);
    }

    // GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    res.locals.user = currentUser;

    next();
  } catch (err) {
    return next(new AppError('Invalid token', 500));
  }
};

module.exports = protect;
