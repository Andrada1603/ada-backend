const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      first_name: 'Andrei',
      last_name: 'Popescu',
      birthday: new Date("1984-04-18"),
      email: 'andreipopescu70@gmail.com',
      salary: 3500,
      coach_category: 'Antrenor emerit',
      license_number: 121,
    },
    {
      first_name: 'Alina',
      last_name: 'Ionescu',
      birthday: new Date("1980-02-14"),
      email: 'alinaionescu@yahoo.com',
      salary: 2300,
      coach_category: 'I',
      license_number: 133,
    },
    {
      first_name: 'Victor',
      last_name: 'Ocnarescu',
      birthday: new Date("1989-05-22"),
      email: 'ocnarescuvic@yahoo.com',
      salary: 4000,
      coach_category: 'Antrenor emerit',
      license_number: 198,
    },
    {
      first_name: 'Razvan',
      last_name: 'Georgescu',
      birthday: new Date("1990-12-04"),
      email: 'rzvgeorgescu@yahoo.com',
      salary: 2000,
      coach_category: 'III',
      license_number: 251,
    },
    {
      first_name: 'Maya',
      last_name: 'Preda',
      birthday: new Date("1995-02-22"),
      email: 'prdmaya@gmail.com',
      salary: 2500,
      coach_category: 'I',
      license_number: 369,
    },
    {
      first_name: 'Vlad',
      last_name: 'Barbu',
      birthday: new Date("1975-07-13"),
      email: 'vladbarbu@yahoo.com',
      salary: 3000,
      coach_category: 'Antrenor national',
      license_number: 489,
    },
  ];
};
