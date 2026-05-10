const express = require("express");
const router = express.Router();
const baggageController = require("../controllers/baggageController");

router.post("/", baggageController.createReport);
router.get("/", baggageController.getAllReports);

module.exports = router;
