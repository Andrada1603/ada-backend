const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'match';
const schema = new mongoose.Schema({
  player1: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (key) => key.toString(),
  },
  player2: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (key) => key.toString(),
  },
  arbiter_name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

  },
  location: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (key) => key.toString(),
  },
  match_type: {
    type: String,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
