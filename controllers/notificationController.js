const notificationService = require("../services/notificationService");

const getAll = (req, res) => {
  res.json(notificationService.getAllNotifications());
};

const markAsRead = (req, res) => {
  try {
    const notification = notificationService.markNotificationAsRead(req.params.id);
    res.json(notification);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getAll, markAsRead };
