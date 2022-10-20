const express = require('express');
const { getAll,form,addhostels} = require('./../../controllers/gymkhana/hostelsController');

const router = express.Router()


router.route('/').get(getAll);
router.route('/add').get(form);
router.route('/add').post(addhostels);
module.exports = router;