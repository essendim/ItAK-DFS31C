import jwt from "jsonwebtoken";
import {
  apiKey,
  secretKey,
} from "../../D56 - API REST/Securisation/config/secret.js";
const product = {
  name: "Mind Flayer 17",
  price: 66666,
};

// Générer la signature
const signature = jwt.sign(product, secretKey + apiKey);

// Afficher la signature
console.log("Signature:", signature);
