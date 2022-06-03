const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      first_name: 'Matei',
      last_name: 'Marinescu',
      birthday: {
        year: 2009,
        month: 2,
        day: 20,
      },
      email: 'mateimarinescu@gmail.com',
      category:'I',
    },
    {
      first_name: 'Andreea',
      last_name: 'Andreescu',
      birthday: {
        year: 2015,
        month: 4,
        day: 18,
      },
      email: 'aandreescu@gmail.com',
      category: 'II',
    },
    {
      first_name: 'Tudor',
      last_name: 'Ursache',
      birthday: {
        year: 2010,
        month: 2,
        day: 4,
      },
      email: 'ursachetdr@gmail.com',
      category: 'Candidat de maestru',
    },
    {
      first_name: 'Florina',
      last_name: 'Baston',
      birthday: {
        year: 2017,
        month: 4,
        day: 18,
      },
      email: 'bastonemilia@gmail.com',
      category: '-',
    },
    {
      first_name: 'Simon',
      last_name: 'Vladescu',
      birthday: {
        year: 2012,
        month: 7,
        day: 16,
      },
      email: 'vldvld@gmail.com',
      category: 'III',
    },
    {
      first_name: 'Maria-Alexandra',
      last_name: 'Popa',
      birthday: {
        year: 2012,
        month: 8,
        day: 17,
      },
      email: 'mapopa@gmail.com',
      category: 'II',
    },
  ];
};
