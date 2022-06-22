const { authenticate } = require('../middleware');
const { Coach } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/coaches', authenticate, Coach.readMany);
router.post('/coaches', authenticate, Coach.create);
router.delete('/coaches/:id', authenticate, Coach.remove);
