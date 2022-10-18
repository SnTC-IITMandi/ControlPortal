const express = require('express');
const { viewsController } = require('./../controllers/viewsController');

const router = express.Router();
router.route('/').get(viewsController.home);

module.exports = router;
