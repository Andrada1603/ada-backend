const { Router } = require('express');
const { errorHandler, fail, notFound, slow } = require('./middleware');
const { identity } = require('./routes');
const { todo } = require('./examples/routes');
const { abonament } = require('./routes');

const router = Router();
module.exports = router;

// useful middleware for testing
router.use(fail);
router.use(slow);

// use the router instances defined
router.use(identity);
router.use(todo);
router.use(abonament);

// matches any other HTTP method and route not matched before
router.all('*', notFound);

// finally, an error handler
router.use(errorHandler);

// use the router instances defined

