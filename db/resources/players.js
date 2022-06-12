const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      first_name: 'Matei',
      last_name: 'Marinescu',
      birthday: new Date("04-02-2005"),
      email: 'mateimarinescu@gmail.com',
      category:'I',
    },
    {
      first_name: 'Andreea',
      last_name: 'Andreescu',
      birthday: new Date("08-03-2006"),
      email: 'aandreescu@gmail.com',
      category: 'II',
    },
    {
      first_name: 'Tudor',
      last_name: 'Ursache',
      birthday: new Date("12-12-2008"),
      email: 'ursachetdr@gmail.com',
      category: 'Candidat de maestru',
    },
    {
      first_name: 'Florina',
      last_name: 'Baston',
      birthday: new Date("14-08-2006"),
      email: 'bastonemilia@gmail.com',
      category: '-',
    },
    {
      first_name: 'Simon',
      last_name: 'Vladescu',
      birthday: new Date("07-10-2005"),
      email: 'vldvld@gmail.com',
      category: 'III',
    },
    {
      first_name: 'Maria-Alexandra',
      last_name: 'Popa',
      birthday: new Date("15-09-2010"),
      email: 'mapopa@gmail.com',
      category: 'II',
    },
  ];
};
