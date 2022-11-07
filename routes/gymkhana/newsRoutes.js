const express = require("express");
const newsController = require("./../../controllers/gymkhana/newsController");

const router = express.Router();

router.route("/").get(newsController.getAll);

router.route("/add").get(newsController.form);
router.route("/add").post(newsController.addNews);
router.route("/update/:id").get(newsController.updateNews);
router.route("/update/:id").post(newsController.update);
module.exports = router;
