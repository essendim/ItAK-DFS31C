import express from 'express';
import { LocationWeatherBuilder } from './builders/LocationWeatherBuilder';

const app = express();
const PORT = 3000;
app.get('/location-weather', async (req, res) => {
    try {
        const builder = new LocationWeatherBuilder();

        console.log('Starting builder process...');
        
        const declaredBuilder = await builder.declare();

        console.log('Declaring builder...');
        await declaredBuilder.name('Lyon', 'France');
        console.log('Location name set');

        const locationWeather = await declaredBuilder.create();
        console.log('Successfully retrieved location and weather data:', locationWeather);
        res.json(locationWeather);
    } catch (error) {
        console.error('Error during location weather process:', error);
        res.status(500).json({ error: 'Error retrieving location weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
