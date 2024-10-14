const express = require("express");
const router = express.Router();

// Fonction pour renvoyer la map au format JSON
const toJSON = () => {
  return { hello: "world" };
};

// Fonction pour renvoyer la map au format CSV
const toCSV = () => {
  return "hello,world\n";
};

// Fonction pour renvoyer la map au format XML
const toXML = () => {
  return `<response><hello>world</hello></response>`;
};

// Route pour renvoyer "hello world" dans différents formats
router.get("/hello", (req, res) => {
  const acceptHeader = req.headers["accept"];

  // Vérification du format demandé via le header Accept
  if (acceptHeader.includes("application/json")) {
    res.setHeader("Content-Type", "application/json");
    res.json(toJSON());
  } else if (acceptHeader.includes("text/csv")) {
    res.setHeader("Content-Type", "text/csv");
    res.send(toCSV());
  } else if (acceptHeader.includes("application/xml")) {
    res.setHeader("Content-Type", "application/xml");
    res.send(toXML());
  } else {
    res.status(406).send("Format non supporté");
  }
});

module.exports = router;
