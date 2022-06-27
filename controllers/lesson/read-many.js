const { error } = require('../../functions');
const { Lesson } = require('../../models');

module.exports = async (req, res) => {
  const { me } = req.user;
  if (!me) {
    throw error(404, 'Missing required params');
  }

  const lessons = await Lesson.find({}).populate('player').populate('area').paginate(req.query);
  if (!lessons) {
    throw error(404, 'Resource not found');
  }

  return res.status(200).json(lessons);
};
