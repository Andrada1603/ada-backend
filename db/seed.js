const connectToMongo = require('../functions/connect');
const abonaments = require('./seeds/003_abonaments');
const areas = require('./seeds/004_areas');
const coaches = require('./seeds/002_coaches');
const identities = require('./seeds/001_identities');
const players = require('./seeds/005_players');


const seed = async (params) => {
  if (process.env.MONGODB_URI.includes('mongodb+srv') && params !== '--force') {
    throw new Error("You can't run this seed on a live database");
  }

  await connectToMongo();

  await abonaments.seed();
  await areas.seed();
  await coaches.seed();
  await identities.seed();
  await players.seed();
  
};

(async () => {
  try {
    const params = process.argv;
    await seed(params[2]); // invoke function
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

module.exports.seed = seed;
