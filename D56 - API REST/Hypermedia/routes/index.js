import express from "express";
import { getWeatherData } from "../api/v1/WeatherController.js";

const router = express.Router();

// Route pour obtenir les données météo
router.get("/api/v1/weather", getWeatherData);

export default router;
