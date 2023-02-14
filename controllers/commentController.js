module.exports.show_comments = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'all comments',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.get_comment = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'comment',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.create_comment = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'comment created',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.update_comment = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'comment updated',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.delete_comment = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'comment deleted',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};
