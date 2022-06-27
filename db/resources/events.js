const Players = require('../../models/player');
const Abonaments = require('../../models/abonament');

module.exports = async () => {
  const players = await Players.find();
  const abonaments = await Abonaments.find();

  return [
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'national',
    },
    {
      player: players[0]._id,
      abonament: abonaments[0]._id,
      event_type: 'international',
    },
  ];
};
