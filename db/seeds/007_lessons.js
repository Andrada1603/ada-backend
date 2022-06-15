/* eslint-disable no-console */
const Player = require('../../models/lesson');
const players = require('../resources/lessons');

exports.seed = async () => {
  try {
    console.log('Planting seeds for lessons');

    const seeds = await players();
    await Player.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert lessons');
    console.error(err);
  }
};
