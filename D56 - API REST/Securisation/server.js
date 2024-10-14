import express from "express";
import dotenv from "dotenv";
import routes from "../Securisation/routes/index.js";

// Charger les variables d'environnement
dotenv.config();

const app = express();
app.use(express.json()); // Pour analyser le JSON

// Routes principales
app.use("/api", routes);

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
