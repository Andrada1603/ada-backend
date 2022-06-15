/* eslint-disable no-console */
const Player = require('../../models/event');
const players = require('../resources/events');

exports.seed = async () => {
  try {
    console.log('Planting seeds for events');

    const seeds = await players();
    await Player.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert events');
    console.error(err);
  }
};
