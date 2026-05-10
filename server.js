const express = require("express");
const cors = require("cors");

const flightRoutes = require("./routes/flights");
const notificationRoutes = require("./routes/notifications");
const baggageRoutes = require("./routes/baggage");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FlyTrack API - AeroPuerto Smart", version: "1.0.0" });
});

app.use("/api/flights", flightRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/baggage", baggageRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;
