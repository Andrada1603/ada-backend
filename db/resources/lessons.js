const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      name: 'Lectie demo sah',
      coach_id: '62a85fcadd1f7a5c34a9160b',
      players: ['62a85fcadd1f7a5c34a91616','62a85fcadd1f7a5c34a91613'],
      date: new Date('2022-06-01'),
      location: '62a85fcadd1f7a5c34a91601',
      description: 'Prima lectie de sah',
    },
    {
      name: 'Lectie demo fotbal',
      coach_id: '62a85fcadd1f7a5c34a9160a',
      players: ['62a85fcadd1f7a5c34a91616', '62a85fcadd1f7a5c34a91613'],
      date: new Date('2022-06-02'),
      location: '62a85fcadd1f7a5c34a91601',
      description: 'Prima lectie de fotbal',
    },
    {
      name: 'Lectie demo volei',
      coach_id: '62a85fcadd1f7a5c34a91609',
      players: ['62a85fcadd1f7a5c34a91616', '62a85fcadd1f7a5c34a91613'],
      date: new Date('2022-06-05'),
      location: '62a85fcadd1f7a5c34a91602',
      description: 'Prima lectie de volei',
    },
    {
      name: 'Lectie demo eSports',
      coach_id: '62a85fcadd1f7a5c34a91608',
      players: ['62a85fcadd1f7a5c34a91616', '62a85fcadd1f7a5c34a91613'],
      date: new Date('2022-05-30'),
      location: '62a85fcadd1f7a5c34a91603',
      description: 'Prima lectie de eSports',
    },
  ];
};
