module.exports.show_posts = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'all posts',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.get_post = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'post',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.create_post = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'post created',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.update_post = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'post updated',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.delete_post = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'post deleted',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};
