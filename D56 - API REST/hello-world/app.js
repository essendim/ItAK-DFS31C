const express = require("express");
const helloRouter = require("./routes/hello");

const app = express();
const PORT = process.env.PORT || 3000;

// Utilisation du routeur pour la version de l'API v1
app.use("/api/v1", helloRouter);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
