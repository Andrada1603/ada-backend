/* eslint-disable no-console */
const Player = require('../../models/match');
const players = require('../resources/matches');

exports.seed = async () => {
  try {
    console.log('Planting seeds for matches');

    const seeds = await players();
    await Player.insertMany(seeds);

    console.log('✓');
  } catch (err) {
    console.warn('Error! Cannot insert matches');
    console.error(err);
  }
};
