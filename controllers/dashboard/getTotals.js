const { Player, Coach, Lesson, Match, Abonament } = require('../../models');

const getTotals = async (req, res) => {
  const numPlayers = await Player.countDocuments()
  const numCoaches = await Coach.countDocuments()
  const numLessons = await Lesson.countDocuments()
  const numMatches = await Match.countDocuments()
  const numAbonaments = await Abonament.countDocuments()

  return res.status(200).json({
    numAbonaments,
    numCoaches,
    numLessons,
    numMatches,
    numPlayers,
  });

}


module.exports = getTotals
