const { authenticate } = require('../middleware');
const { Player } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/player', authenticate, Player.readMany);