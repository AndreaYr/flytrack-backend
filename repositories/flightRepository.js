const { flights } = require("../data/mockData");

const getAll = () => flights;

const getById = (id) => flights.find((f) => f.id === id) || null;

const getByStatus = (status) => flights.filter((f) => f.status === status);

module.exports = { getAll, getById, getByStatus };
