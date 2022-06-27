const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'match';
const schema = new mongoose.Schema({
  player1: {
    type: mongoose.Types.ObjectId,
    ref: 'player',
  },
  player2: {
    type: mongoose.Types.ObjectId,
    ref: 'player',
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
    ref: 'area',
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
