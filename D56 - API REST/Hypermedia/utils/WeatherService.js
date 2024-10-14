import axios from "axios";

// Fonction pour récupérer les données météo
export const getWeatherData = async (req, res) => {
  const { location } = req.query; // Récupère la localisation depuis les paramètres de la requête

  try {
    // Remplacez par votre URL d'API météo
    const apiKey = process.env.API_SECRET; // Assurez-vous que cela pointe vers votre clé API
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );

    res.json(response.data); // Retourne les données météo en JSON
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des données météo." });
  }
};
