const mongoose = require('mongoose');

// Database Connection
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const numPlayers = await Players.countDocuments()
const numCoaches = await Coaches.countDocuments()
const numLessons = await Lessons.countDocuments()
const numMatches = await Matches.countDocuments()
const numAbonaments = await Abonaments.countDocuments()

module.exports={
  numAbonaments,
  numCoaches,
  numLessons,
  numMatches,
  numPlayers,
}
