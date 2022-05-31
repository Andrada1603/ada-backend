const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'event';
const schema = new mongoose.Schema({
  id_player: {
    type: String,
    required: true,
  },
  id_abonament: {
    type: String,
    required: true,
  },
  event_type: {
    type: String,
    enum:['unofficial', 'national', 'international'],

  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
