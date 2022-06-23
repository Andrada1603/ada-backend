const { error } = require('../../functions');
const { Coach, Identity } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const identity = await Identity.findById(me).lean();
  const payload = {
    ...req.body,
    identity,
  };

  const area = await Coach.create(payload);
  if (!area) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json({ data: area, message: 'Coach created' });
};
