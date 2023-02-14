module.exports.show_categories = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'all categories',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.get_category = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'category',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.create_category = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'category created',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.update_category = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'category updated',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};

module.exports.delete_category = async (req, res) => {
  try {
    res.json({
      status: 'success',
      data: 'category deleted',
    });
  } catch (err) {
    res.json({
      status: 'fail',
      data: err.message,
    });
  }
};
