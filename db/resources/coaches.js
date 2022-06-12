const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      first_name: 'Andrei',
      last_name: 'Popescu',
      birthday: new Date("18-04-1984"),
      email: 'andreipopescu70@gmail.com',
      salary: 3500,
      coach_category: 'Antrenor emerit',
      license_number: 121,
    },
    {
      first_name: 'Alina',
      last_name: 'Ionescu',
      birthday: new Date("14-02-1980"),
      email: 'alinaionescu@yahoo.com',
      salary: 2300,
      coach_category: 'I',
      license_number: 133,
    },
    {
      first_name: 'Victor',
      last_name: 'Ocnarescu',
      birthday: new Date("22-05-1989"),
      email: 'ocnarescuvic@yahoo.com',
      salary: 4000,
      coach_category: 'Antrenor emerit',
      license_number: 198,
    },
    {
      first_name: 'Razvan',
      last_name: 'Georgescu',
      birthday: new Date("04-12-1990"),
      email: 'rzvgeorgescu@yahoo.com',
      salary: 2000,
      coach_category: 'III',
      license_number: 251,
    },
    {
      first_name: 'Maya',
      last_name: 'Preda',
      birthday: new Date("22-02-1995"),
      email: 'prdmaya@gmail.com',
      salary: 2500,
      coach_category: 'I',
      license_number: 369,
    },
    {
      first_name: 'Vlad',
      last_name: 'Barbu',
      birthday: new Date("13-07-1975"),
      email: 'vladbarbu@yahoo.com',
      salary: 3000,
      coach_category: 'Antrenor national',
      license_number: 489,
    },
  ];
};
