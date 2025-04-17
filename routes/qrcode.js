const express = require('express');
const router  = express.Router();
const qrController = require('../controllers/qrController');

router.get('/', qrController.generateQRCode);

module.exports = router;