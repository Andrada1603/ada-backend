const { error } = require('../../functions');
const { Coach } = require('../../models');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { me } = req.user;
  if (!id || !me) {
    throw error(404, 'Missing required params');
  }

  const area = await Coach.findById(id);
  if (!area) {
    throw error(404, 'Resource not found');
  }

  await area.remove();

  return res.status(200).json({ data: area, message: 'Coach removed' });
};
