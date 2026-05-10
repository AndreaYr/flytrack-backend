const notificationService = require("../services/notificationService");

describe("notificationService", () => {
  test("obtiene todas las notificaciones", () => {
    const notifications = notificationService.getAllNotifications();
    expect(notifications.length).toBeGreaterThan(0);
  });

  test("marca una notificación como leída", () => {
    const notification = notificationService.markNotificationAsRead("n1");
    expect(notification.read).toBe(true);
  });

  test("lanza error si la notificación no existe", () => {
    expect(() => notificationService.markNotificationAsRead("n999")).toThrow("no encontrada");
  });
});
