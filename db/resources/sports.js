const { Coach } = require('../../models');

module.exports = async () => {
  const coaches = await Coach.find();

  return [
    {
      name: 'Sah',
      manager_name: 'Georgescu Tiberiu',
      coaches: [coaches[0]['_id'], coaches[1]['_id']],
      foundation_date: new Date('2020-08-10'),
    },
    {
      name: 'Volei',
      manager_name: 'Ifrim Razvan',
      coaches: [coaches[2]['_id']],
      foundation_date: new Date('2020-12-05'),
    },
    {
      name: 'Fotbal',
      manager_name: 'Dulceata Victor',
      coaches: [coaches[1]['_id']],
      foundation_date: new Date('2021-02-04'),
    },
    {
      name: 'Baschet',
      manager_name: 'Beatu Andrei',
      coaches: [coaches[3]['_id']],
      foundation_date: new Date('2021-05-14'),
    },
  ];
};
