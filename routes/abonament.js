const { authenticate } = require('../middleware');
const { Dashboard } = require('../controllers');

const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/abonaments', authenticate, Dashboard.readMany);
router.post('/abonaments', authenticate, Dashboard.create);
router.delete('/abonament/:id', authenticate, Dashboard.remove);
router.get('/abonament/:id', authenticate, Dashboard.readOne);
router.put('/abonament/:id', authenticate, Dashboard.update);
