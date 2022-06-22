const { authenticate } = require('../middleware');
const { Match } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/matches', authenticate, Match.readMany);
router.post('/matches', authenticate, Match.create);
router.delete('/match/:id', authenticate, Match.remove);
