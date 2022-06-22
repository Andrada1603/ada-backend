const { authenticate } = require('../middleware');
const { Coache } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/coaches', authenticate, Coach.readMany);
