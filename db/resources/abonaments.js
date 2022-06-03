const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      abonament_type: 'Premium',
      starting_date: {
        year: 2020,
        month: 4,
        day: 20,
      },
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: {
        year: 2020,
        month: 5,
        day: 22,
      },
      period: 30,
      price: 200,
    },
    {
      abonament_type: 'Medium',
      starting_date: {
        year: 2020,
        month: 7,
        day: 15,
      },
      period: 30,
      price: 400,
    },
    {
      abonament_type: 'Premium',
      starting_date: {
        year: 2021,
        month: 1,
        day: 5,
      },
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: {
        year: 2021,
        month: 5,
        day: 22,
      },
      period: 30,
      price: 200,
    },
  ]
