const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      abonament_type: 'Premium',
      starting_date: new Date("2022-01-01"),
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: new Date("2022-02-01"),
      period: 30,
      price: 200,
    },
    {
      abonament_type: 'Medium',
      starting_date: new Date("2022-03-01"),
      period: 30,
      price: 400,
    },
    {
      abonament_type: 'Premium',
      starting_date: new Date("2022-03-01"),
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: new Date("2022-05-01"),
      period: 30,
      price: 200,
    },
  ]
}
