const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'area';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dimension: {
    type: Number,
    required: true,
  },
  adresse: {
    type: String,
    required: true,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
