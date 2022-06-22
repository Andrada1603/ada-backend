const { Router } = require('express');
const { errorHandler, fail, notFound, slow } = require('./middleware');
const { identity } = require('./routes');
const { todo } = require('./examples/routes');
const { abonament } = require('./routes');
const { area } = require('./routes');
const { coach } = require('./routes');
const { event } = require('./routes');
const { lesson } = require('./routes');
const { match } = require('./routes');
const { player } = require('./routes');

const router = Router();
module.exports = router;

// useful middleware for testing
router.use(fail);
router.use(slow);

// use the router instances defined
router.use(identity);
router.use(todo);
router.use(abonament);
router.use(area);
router.use(coach);
router.use(event);
router.use(lesson);
router.use(match);
router.use(player);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);
