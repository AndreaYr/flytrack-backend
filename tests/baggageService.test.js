const baggageService = require("../services/baggageService");

describe("baggageService", () => {
  const validReport = {
    passengerName: "Ana Torres",
    flightNumber: "AS101",
    description: "Maleta negra con ruedas rojas",
    email: "ana@correo.com",
    issueType: "Perdido",
  };

  test("crea un reporte de equipaje válido", () => {
    const report = baggageService.createReport(validReport);
    expect(report.id).toMatch(/^BAG-/);
    expect(report.passengerName).toBe("Ana Torres");
    expect(report.issueType).toBe("Perdido");
  });

  test("lanza error si faltan campos obligatorios", () => {
    expect(() => baggageService.createReport({ passengerName: "Ana" })).toThrow("obligatorios");
  });

  test("lanza error con tipo de problema inválido", () => {
    expect(() =>
      baggageService.createReport({ ...validReport, issueType: "Extraviado" })
    ).toThrow("Tipo de problema inválido");
  });

  test("obtiene todos los reportes creados", () => {
    baggageService.createReport(validReport);
    const reports = baggageService.getAllReports();
    expect(reports.length).toBeGreaterThan(0);
  });
});
