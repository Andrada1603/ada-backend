const { hashSync } = require('bcryptjs');

module.exports = async () => {
  return [
    {
      email: 'admin@email.com',
      name: 'Andrada Popa',
      role: 'admin',
      password: hashSync('supersecretpassword'),
      active: true,
      confirmed: true,
    },
  ];
};
