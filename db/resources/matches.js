const { Area, Player } = require('../../models');

module.exports = async () => {
  const players = await Player.find();
  const areas = await Area.find();

  return [
    {
      player1: players[0]['_id'],
      player2: players[5]['_id'],
      arbiter_name: 'Chirila Radu',
      date: new Date('2022-06-01'),
      location: areas[0]['_id'],
      match_type: 'Campionatul National',
    },
    {
      player1: players[0]['_id'],
      player2: players[2]['_id'],
      arbiter_name: 'Nicula Ioan',
      date: new Date('2022-06-01'),
      location: areas[1]['_id'],
      match_type: 'Campionatul National',
    },
    {
      player1: players[1]['_id'],
      player2: players[3]['_id'],
      arbiter_name: 'Muntean Ciprian',
      date: new Date('2022-06-01'),
      location: areas[2]['_id'],
      match_type: 'Campionatul National',
    },
    {
      player1: players[4]['_id'],
      player2: players[2]['_id'],
      arbiter_name: 'Popescu Andrei',
      date: new Date('2022-06-01'),
      location: areas[1]['_id'],
      match_type: 'Campionatul National',
    },
  ];
};
