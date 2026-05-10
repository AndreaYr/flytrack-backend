const flightService = require("../services/flightService");

const getAll = (req, res) => {
  const { status } = req.query;
  try {
    const flights = status
      ? flightService.getFlightsByStatus(status)
      : flightService.getAllFlights();
    res.json(flights);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getById = (req, res) => {
  try {
    const flight = flightService.getFlightById(req.params.id);
    res.json(flight);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAll, getById };
