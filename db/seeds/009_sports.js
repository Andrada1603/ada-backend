/* eslint-disable no-console */
const Sport = require('../../models/match');
const sports = require('../resources/matches');

exports.seed = async () => {
  try {
    console.log('Planting seeds for sports');

    const seeds = await sports();
    await Sport.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert matches');
    console.error(err);
  }
};
