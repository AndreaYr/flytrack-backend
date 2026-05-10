const flightRepository = require("../repositories/flightRepository");

const getAllFlights = () => flightRepository.getAll();

const getFlightById = (id) => {
  const flight = flightRepository.getById(id);
  if (!flight) throw new Error(`Vuelo con id ${id} no encontrado`);
  return flight;
};

const getFlightsByStatus = (status) => {
  const validStatuses = ["A Tiempo", "Retrasado", "Cancelado", "Abordando"];
  if (!validStatuses.includes(status)) {
    throw new Error(`Estado inválido: ${status}`);
  }
  return flightRepository.getByStatus(status);
};

module.exports = { getAllFlights, getFlightById, getFlightsByStatus };
