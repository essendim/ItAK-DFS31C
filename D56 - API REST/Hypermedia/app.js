import express from "express";
import weatherRoutes from "./routes/index.js"; // Chemin correct vers le fichier de routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware pour traiter les JSON
app.use("/api/v1", weatherRoutes); // Utilisation des routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
