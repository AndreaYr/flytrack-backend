const baggageRepository = require("../repositories/baggageRepository");

const createReport = ({ passengerName, flightNumber, description, email, issueType }) => {
  if (!passengerName || !flightNumber || !description || !email || !issueType) {
    throw new Error("Todos los campos son obligatorios");
  }

  const validTypes = ["Perdido", "Dañado", "Retrasado"];
  if (!validTypes.includes(issueType)) {
    throw new Error(`Tipo de problema inválido: ${issueType}`);
  }

  const report = {
    id: `BAG-${Date.now()}`,
    passengerName,
    flightNumber,
    description,
    email,
    issueType,
    createdAt: new Date().toISOString(),
  };

  return baggageRepository.create(report);
};

const getAllReports = () => baggageRepository.getAll();

module.exports = { createReport, getAllReports };
