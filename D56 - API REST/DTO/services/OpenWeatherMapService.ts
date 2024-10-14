// services/OpenWeatherMapService.ts
import axios from 'axios';

export class OpenWeatherMapService {
    private apiKey: string = '0608f0a6ed450b0da91f8a7eb04b32c8'; // Remplacez par votre clé API
    private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

    async getWeatherData(latitude: number, longitude: number): Promise<{ temperature: number; humidity: number; windSpeed: number }> {
    try {
        console.log(`Requesting weather data from: ${this.apiUrl}?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`);
        
        const response = await axios.get(this.apiUrl, {
            params: {
                lat: latitude,
                lon: longitude,
                appid: this.apiKey,
                units: 'metric' // Pour obtenir la température en Celsius
            }
        });

        console.log('Response data:', response.data);

        if (response.data && response.data.main && response.data.wind) {
            return {
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed
            };
        } else {
            throw new Error('Unexpected response structure');
        }
    } catch (error: unknown) { // Spécifiez que 'error' est de type unknown
        if (axios.isAxiosError(error)) { // Vérifiez si l'erreur est une erreur Axios
            console.error('Error fetching weather data:', error.response?.data);
            console.error('Status code:', error.response?.status);
        } else if (error instanceof Error) { // Vérifiez si l'erreur est une instance d'Error
            console.error('Error message:', error.message);
        } else {
            console.error('An unknown error occurred:', error);
        }
        throw error; // Propager l'erreur pour gestion ultérieure
    }
}

}
