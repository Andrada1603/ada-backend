const { authenticate } = require('../middleware');
const { Lesson } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/lessons', authenticate, Lesson.readMany);
router.post('/lessons', authenticate, Lesson.create);
