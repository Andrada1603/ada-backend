const { authenticate } = require('../middleware');
const {Area } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/areas', authenticate, Area.readMany);
