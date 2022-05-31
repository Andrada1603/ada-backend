const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

/**
 * Identities manage login related operations
 */
const name = 'lesson';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coach_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (key) => key.toString(),
  },
  players: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      get: (key) => key.toString(),
    }
  ],
  date: {
    type: Date,
    required: true,

  },
  location: {
    type: mongoose.Types.ObjectId,
    required: true,
    get: (key) => key.toString(),
  },
  description: {
    type: String,
  },
  ...timestamps,
});

schema.plugin(hashPasswords);
schema.plugin(paginate);
schema.plugin(validate);

module.exports = mongoose.model(name, schema);
