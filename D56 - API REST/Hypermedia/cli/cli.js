import axios from "axios";
import readline from "readline";

// Création d'une interface de lecture pour les entrées de l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction pour récupérer les données météo
const getWeatherData = async (location, apiKey) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    console.log(response.data); // Afficher les données météo
  } catch (error) {
    console.error(
      "Erreur lors de l'appel de l'API :",
      error.response ? error.response.data : error.message
    );
  }
};

// Demande des informations à l'utilisateur
rl.question("Entrez le lieu (par exemple, Paris) : ", (location) => {
  rl.question("Entrez votre clé API : ", (apiKey) => {
    getWeatherData(location, apiKey);
    rl.close(); // Ferme l'interface de lecture
  });
});
