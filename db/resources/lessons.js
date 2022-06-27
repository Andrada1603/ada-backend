const { Area, Coach, Player } = require('../../models');

module.exports = async () => {
  const players = await Player.find();
  const coaches = await Coach.find();
  const areas = await Area.find();

  return [
    {
      name: 'Lectie demo sah',
      coach: coaches[0]['_id'],
      players: [players[0]['_id'], players[1]['_id']],
      date: new Date('2022-06-01'),
      location: areas[0]['_id'],
      description: 'Prima lectie de sah',
    },
    {
      name: 'Lectie demo fotbal',
      coach: coaches[1]['_id'],
      players: [players[2]['_id'], players[3]['_id']],
      date: new Date('2022-06-02'),
      location: areas[4]['_id'],
      description: 'Prima lectie de fotbal',
    },
    {
      name: 'Lectie demo volei',
      coach: coaches[2]['_id'],
      players: [players[4]['_id'], players[0]['_id'], players[3]['_id']],
      date: new Date('2022-06-05'),
      location: areas[2]['_id'],
      description: 'Prima lectie de volei',
    },
    {
      name: 'Lectie demo eSports',
      coach: coaches[3]['_id'],
      players: [players[5]['_id'], players[1]['_id']],
      date: new Date('2022-05-30'),
      location: areas[2]['_id'],
      description: 'Prima lectie de eSports',
    },
  ];
};
