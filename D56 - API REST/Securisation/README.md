# MonProjet

Une API REST sécurisée avec JWT pour gérer des produits et récupérer des données météo.

## Configuration

1. Cloner le projet.
2. Créez un fichier `.env` avec votre clé API de météo (par exemple `WEATHER_API_KEY`).
3. Installer les dépendances : `npm install`.
4. Démarrer le serveur : `npm start`.

## Routes de l'API

- `/api/v1/weather?location={ville}` : Obtenez les données météo pour une ville.
- `/api/v2/products` :
    - `GET` : Liste des produits.
    - `POST` : Créer un produit (requiert une signature JWT).

## Sécurisation

Toutes les requêtes vers les routes produits doivent être signées avec un JWT. Utilisez la clé et le secret pour générer une signature.
