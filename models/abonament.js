const mongoose = require('mongoose');
// const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'abonament';
const schema = new mongoose.Schema({

  abonament_type: {
    type: String,
    // enum['Premium', 'Medium', 'Basic'],
    required: true,
  },
  starting_date: {
    year: Number,
    month: Number,
    day: Number,

  },
  period: {
    type: Number,
  },
  price: {
    type: Number,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
