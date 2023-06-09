const { authenticate } = require('../middleware');
const { Lesson } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/lessons', authenticate, Lesson.readMany);
router.post('/lessons', authenticate, Lesson.create);
router.delete('/lesson/:id', authenticate, Lesson.remove);
router.get('/lesson/:id', authenticate, Lesson.readOne);
router.put('/lesson/:id', authenticate, Lesson.update);
