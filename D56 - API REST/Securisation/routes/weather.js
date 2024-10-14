// routes/weather.js
import express from "express";

const router = express.Router();

// Endpoint pour obtenir la météo
router.get("/weather", (req, res) => {
  const weatherData = {
    temperature: "22°C",
    condition: "Ensoleillé",
  };
  res.json(weatherData);
});

export default router;
