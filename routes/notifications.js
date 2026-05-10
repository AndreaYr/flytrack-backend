const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.get("/", notificationController.getAll);
router.patch("/:id/read", notificationController.markAsRead);

module.exports = router;
