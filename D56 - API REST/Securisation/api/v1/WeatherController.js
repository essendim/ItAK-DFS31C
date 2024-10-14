import axios from "axios";

export const getWeatherData = async (req, res) => {
  const { location } = req.query; // Paramètre de localisation
  const apiKey = process.env.WEATHER_API_KEY; // Clé API de l'API météo

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    res.json(response.data); // Retourne les données météo au format JSON
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des données météo." });
  }
};
