const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      first_name: 'Andrei',
      last_name: 'Popescu',
      birthday: {
        year: 1970,
        month: 2,
        day: 20,
      },
      email: 'andreipopescu70@gmail.com',
      salary: 3500,
      coach_category: 'Antrenor emerit',
      license_number: 121,
    },
    {
      first_name: 'Alina',
      last_name: 'Ionescu',
      birthday: {
        year: 1989,
        month: 1,
        day: 29,
      },
      email: 'alinaionescu@yahoo.com',
      salary: 2300,
      coach_category: 'I',
      license_number: 133,
    },
    {
      first_name: 'Victor',
      last_name: 'Ocnarescu',
      birthday: {
        year: 2000,
        month: 1,
        day: 16,
      },
      email: 'ocnarescuvic@yahoo.com',
      salary: 4000,
      coach_category: 'Antrenor emerit',
      license_number: 198,
    },
    {
      first_name: 'Razvan',
      last_name: 'Georgescu',
      birthday: {
        year: 1990,
        month: 7,
        day: 14,
      },
      email: 'rzvgeorgescu@yahoo.com',
      salary: 2000,
      coach_category: 'III',
      license_number: 251,
    },
    {
      first_name: 'Maya',
      last_name: 'Preda',
      birthday: {
        year: 1985,
        month: 1,
        day: 31,
      },
      email: 'prdmaya@gmail.com',
      salary: 2500,
      coach_category: 'I',
      license_number: 369,
    },
    {
      first_name: 'Vlad',
      last_name: 'Barbu',
      birthday: {
        year: 1984,
        month: 11,
        day: 11,
      },
      email: 'vladbarbu@yahoo.com',
      salary: 3000,
      coach_category: 'Antrenor national',
      license_number: 489,
    },
  ];
};
