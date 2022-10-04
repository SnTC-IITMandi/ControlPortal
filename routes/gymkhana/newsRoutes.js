const express = require('express');
const { getAll } = require('./../../controllers/gymkhana/newsController');

const router = express.Router();

router.route('/').get(getAll);

module.exports = router;
