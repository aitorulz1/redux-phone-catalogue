const express = require('express');
const router = express.Router();
const controller = require('../controllers/baseController');
const phonesController = require('../controllers/phonesController');

router.get('/', controller.base);
router.get('/phones', phonesController.list);


module.exports = router;