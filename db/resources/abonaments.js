const { hashSync } = require('bcryptjs');

module.exports = async () => {
  const shhhh = hashSync('supersecretpassword');
  return [
    {
      abonament_type: 'Premium',
      starting_date: new Date("01-01-2022"),
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: new Date("01-02-2022"),
      period: 30,
      price: 200,
    },
    {
      abonament_type: 'Medium',
      starting_date: new Date("01-03-2022"),
      period: 30,
      price: 400,
    },
    {
      abonament_type: 'Premium',
      starting_date: new Date("01-01-2022"),
      period: 30,
      price: 500,
    },
    {
      abonament_type: 'Basic',
      starting_date: new Date("01-05-2022"),
      period: 30,
      price: 200,
    },
  ]
}
