const notificationRepository = require("../repositories/notificationRepository");

const getAllNotifications = () => notificationRepository.getAll();

const markNotificationAsRead = (id) => {
  const notification = notificationRepository.markAsRead(id);
  if (!notification) throw new Error(`Notificación con id ${id} no encontrada`);
  return notification;
};

module.exports = { getAllNotifications, markNotificationAsRead };
