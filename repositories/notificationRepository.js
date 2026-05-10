const { notifications } = require("../data/mockData");

const getAll = () => notifications;

const getById = (id) => notifications.find((n) => n.id === id) || null;

const markAsRead = (id) => {
  const notification = notifications.find((n) => n.id === id);
  if (!notification) return null;
  notification.read = true;
  return notification;
};

module.exports = { getAll, getById, markAsRead };
