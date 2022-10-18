const express = require('express');
const { home,gymkhana} = require('./../controllers/viewsController');

const router = express.Router();
router.route('/').get(home);
router.route('/gymkhana').get(gymkhana);

module.exports = router;
