import readline from "readline";
import axios from "axios";
import jwt from "jsonwebtoken";
import { apiKey, secretKey } from "../config/secrets.js";

// Configuration de l'interface de saisie
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fonction pour faire des requêtes vers l'API
const makeRequest = async (location) => {
  try {
    const signature = jwt.sign({ location }, secretKey + apiKey);

    const response = await axios.get(
      `http://localhost:3000/api/v1/weather?location=${location}`,
      {
        headers: {
          "x-signature": signature,
        },
      }
    );

    console.log("Données météo:", response.data);
  } catch (error) {
    console.error("Erreur lors de l'appel de l'API :", error.message);
  }
};

// Demande l'entrée de l'utilisateur
rl.question("Entrez le lieu (par exemple, Paris) : ", (location) => {
  makeRequest(location);
  rl.close();
});
