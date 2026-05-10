const flights = [
  { id: "1", number: "AS101", airline: "AeroSmart", origin: "Bogotá (BOG)", destination: "Medellín (MDE)", departure: "08:30", arrival: "09:35", date: "2026-05-09", status: "A Tiempo", gate: "A3", passenger: "Carlos Ramírez", seat: "12A" },
  { id: "2", number: "AS204", airline: "AeroSmart", origin: "Cartagena (CTG)", destination: "Bogotá (BOG)", departure: "10:15", arrival: "11:45", date: "2026-05-09", status: "Abordando", gate: "B1", passenger: "Lucía Méndez", seat: "7C" },
  { id: "3", number: "LA512", airline: "LATAM", origin: "Bogotá (BOG)", destination: "Madrid (MAD)", departure: "13:00", arrival: "06:20", date: "2026-05-09", status: "Retrasado", gate: "C5", passenger: "Andrés Soto", seat: "22F" },
  { id: "4", number: "AV876", airline: "Avianca", origin: "Cali (CLO)", destination: "Bogotá (BOG)", departure: "14:45", arrival: "15:50", date: "2026-05-09", status: "A Tiempo", gate: "A7", passenger: "María Gómez", seat: "5B" },
  { id: "5", number: "AS330", airline: "AeroSmart", origin: "Bogotá (BOG)", destination: "Miami (MIA)", departure: "16:20", arrival: "20:10", date: "2026-05-09", status: "Cancelado", gate: "D2", passenger: "Jorge Pérez", seat: "18D" },
  { id: "6", number: "CO450", airline: "Copa", origin: "Panamá (PTY)", destination: "Bogotá (BOG)", departure: "18:00", arrival: "20:30", date: "2026-05-10", status: "A Tiempo", gate: "B4", passenger: "Sofía Vargas", seat: "9A" },
  { id: "7", number: "AS112", airline: "AeroSmart", origin: "Bogotá (BOG)", destination: "Barranquilla (BAQ)", departure: "06:00", arrival: "07:25", date: "2026-05-10", status: "A Tiempo", gate: "A2", passenger: "Daniel Castro", seat: "14C" },
  { id: "8", number: "IB678", airline: "Iberia", origin: "Madrid (MAD)", destination: "Bogotá (BOG)", departure: "23:15", arrival: "04:30", date: "2026-05-10", status: "Retrasado", gate: "C1", passenger: "Elena Ríos", seat: "30B" },
];

const notifications = [
  { id: "n1", type: "gate", message: "Cambio de puerta de embarque a B1", flightNumber: "AS204", time: "Hace 5 min", read: false },
  { id: "n2", type: "delay", message: "Vuelo retrasado 45 minutos por condiciones meteorológicas", flightNumber: "LA512", time: "Hace 22 min", read: false },
  { id: "n3", type: "cancel", message: "Vuelo cancelado. Acércate al mostrador de atención.", flightNumber: "AS330", time: "Hace 1 hora", read: false },
  { id: "n4", type: "info", message: "Abordaje iniciado por la puerta A3", flightNumber: "AS101", time: "Hace 1 hora", read: true },
  { id: "n5", type: "delay", message: "Llegada estimada con 30 minutos de retraso", flightNumber: "IB678", time: "Hace 2 horas", read: true },
];

const baggageReports = [];

module.exports = { flights, notifications, baggageReports };
