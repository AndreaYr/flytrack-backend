const flightService = require("../services/flightService");

describe("flightService", () => {
  test("obtiene todos los vuelos", () => {
    const flights = flightService.getAllFlights();
    expect(flights.length).toBeGreaterThan(0);
  });

  test("obtiene un vuelo por id existente", () => {
    const flight = flightService.getFlightById("1");
    expect(flight).toBeDefined();
    expect(flight.number).toBe("AS101");
  });

  test("lanza error si el vuelo no existe", () => {
    expect(() => flightService.getFlightById("999")).toThrow("no encontrado");
  });

  test("filtra vuelos por estado válido", () => {
    const flights = flightService.getFlightsByStatus("Retrasado");
    expect(flights.every((f) => f.status === "Retrasado")).toBe(true);
  });

  test("lanza error con estado inválido", () => {
    expect(() => flightService.getFlightsByStatus("Volando")).toThrow("Estado inválido");
  });
});
