// routes/index.js
import express from "express";

const router = express.Router();

// Exemple d'endpoint pour une autre fonctionnalité, comme la météo
router.get("/v1/weather", (req, res) => {
  res.json({ temperature: 25, condition: "Ensoleillé" });
});

// Vous pouvez ajouter d'autres endpoints ici

export default router;
