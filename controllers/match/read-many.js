const { error } = require('../../functions');
const { Match } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const matches = await Match.find({}).paginate(req.query);
  if (!matches) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(matches);
};
