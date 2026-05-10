const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

router.get("/", flightController.getAll);
router.get("/:id", flightController.getById);

module.exports = router;
