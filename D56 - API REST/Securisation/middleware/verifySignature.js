import jwt from "jsonwebtoken";
import { apiKey, secretKey } from "../config/secret.js";

const verifySignature = (req, res, next) => {
  const signature = req.headers["x-signature"];

  if (!signature) {
    return res.status(401).json({ message: "Signature manquante" });
  }

  try {
    // Vérifie la signature en utilisant la clé secrète et l'API key
    const verified = jwt.verify(signature, secretKey + apiKey);

    if (verified) {
      next(); // Passe au middleware suivant
    }
  } catch (error) {
    return res.status(403).json({ message: "Signature invalide" });
  }
};

export default verifySignature;
