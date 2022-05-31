const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'sport';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  manager_name: {
    type: String,
    required: true,
  },
  coaches: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      get: (key) => key.toString(),
    }
  ],
  foundation_date: {
    type: Date,

  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
