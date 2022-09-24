const express = require('express');
const { getAll } = require('./../controllers/senateController');

const router = express.Router()


router.route('/').get(getAll);
module.exports = router;