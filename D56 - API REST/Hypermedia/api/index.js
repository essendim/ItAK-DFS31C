// routes/index.js
import express from "express"; // Utilisation d'import ES
import { getWeatherData } from "../api/v1/WeatherController.js"; // Correction d'importation

const router = express.Router();

// Route pour obtenir les données météo
router.get("/weather", getWeatherData); // Utilisez la fonction directement

export default router; // Utilisez l'export par défaut
