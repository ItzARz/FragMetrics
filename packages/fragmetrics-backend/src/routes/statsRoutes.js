const express = require('express');
const statsController = require('../controllers/statsController');
const router = express.Router();
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/:id', isAuthenticated, statsController.getStats);

module.exports = router;
