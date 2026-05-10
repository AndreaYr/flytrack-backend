const { baggageReports } = require("../data/mockData");

const getAll = () => baggageReports;

const create = (report) => {
  baggageReports.push(report);
  return report;
};

module.exports = { getAll, create };
