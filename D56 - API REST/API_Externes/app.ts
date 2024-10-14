import express from 'express';
import { LocationWeatherData } from '../location-weather/dtos/LocationWeather';
import { Location } from './models/Location';
import { WeatherData } from './models/WeatherData';
import { City } from './value-objects/City';

const app = express();
const PORT = 3000;

app.get('/location-weather', (req, res) => {
    const city = new City('Paris', 'France'); // Instance de City
    const location = new Location('Paris', city, 48.8566, 2.3522); // Utilisation du nouveau constructeur
    const weatherData = new WeatherData(22, 60, 10); // Instance de WeatherData
    const dto = new LocationWeatherData(location, weatherData); // DTO

    res.json(dto); // Retourne la réponse en JSON
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
