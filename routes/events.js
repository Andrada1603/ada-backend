const { authenticate } = require('../middleware');
const { Event } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/events', authenticate, Event.readMany);
