const Players = require('../../models/player');
const Abonaments = require('../../models/abonament');

module.exports = async () => {
  const players = await Players.find();
  const abonaments = await Abonaments.find();

  return [
    {
      id_player: players[0]._id,
      id_abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      id_player: players[0]._id,
      id_abonament: abonaments[0]._id,
      event_type: 'unofficial',
    },
    {
      id_player: players[0]._id,
      id_abonament: abonaments[0]._id,
      event_type: 'national',
    },
    {
      id_player: players[0]._id,
      id_abonament: abonaments[0]._id,
      event_type: 'international',
    },
  ];
};
