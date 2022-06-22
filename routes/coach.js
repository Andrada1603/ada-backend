const { authenticate } = require('../middleware');
const { Coach } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/coaches', authenticate, Coach.readMany);
