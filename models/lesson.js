const mongoose = require('mongoose');
const { hashPasswords, paginate, validate } = require('./plugins');
const { timestamps } = require('./schemas');

const name = 'lesson';
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coach: {
    type: mongoose.Types.ObjectId,
    ref: 'coach',
  },
  players: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'player',
    },
  ],
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: mongoose.Types.ObjectId,
    ref: 'area',
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
