const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      player1: '62a85fcadd1f7a5c34a91613',
      player2: '62a85fcadd1f7a5c34a91614',
      arbiter_name: 'Chirila Radu',
      date: new Date('2022-06-01'),
      location: '62a85fcadd1f7a5c34a91601',
      match_type: 'Campionatul National',
    },
    {
      player1: '62a85fcadd1f7a5c34a91613',
      player2: '62a85fcadd1f7a5c34a91614',
      arbiter_name: 'Nicula Ioan',
      date: new Date('2022-06-01'),
      location: '62a85fcadd1f7a5c34a91601',
      match_type: 'Campionatul National',
    },
    {
      player1: '62a85fcadd1f7a5c34a91613',
      player2: '62a85fcadd1f7a5c34a91614',
      arbiter_name: 'Muntean Ciprian',
      date: new Date('2022-06-01'),
      location: '62a85fcadd1f7a5c34a91601',
      match_type: 'Campionatul National',
    },
    {
      player1: '62a85fcadd1f7a5c34a91615',
      player2: '62a85fcadd1f7a5c34a91617',
      arbiter_name: 'Popescu Andrei',
      date: new Date('2022-06-01'),
      location: '62a85fcadd1f7a5c34a91601',
      match_type: 'Campionatul National',
    },
  ];
};
