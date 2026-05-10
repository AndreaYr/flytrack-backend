const baggageService = require("../services/baggageService");

const createReport = (req, res) => {
  try {
    const report = baggageService.createReport(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllReports = (req, res) => {
  res.json(baggageService.getAllReports());
};

module.exports = { createReport, getAllReports };
