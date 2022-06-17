const { authenticate } = require('../middleware');
const { Abonament } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/abonaments', authenticate, Abonament.readMany);