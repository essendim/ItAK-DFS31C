import { OpenStreetMapService } from '../services/OpenStreetMapService';
import { OpenWeatherMapService } from '../services/OpenWeatherMapService';
import { Location } from '../models/Location';
import { WeatherData } from '../models/WeatherData';
import { City } from '../value-objects/City';
import { LocationWeatherData } from '../dtos/LocationWeather';
export class LocationWeatherBuilder {
    private location!: Location;
    private weatherData!: WeatherData;

    constructor(
        private osmService: OpenStreetMapService = new OpenStreetMapService(),
        private weatherService: OpenWeatherMapService = new OpenWeatherMapService()
    ) {}

    async declare(): Promise<LocationWeatherBuilder> {
        return this;
    }

    async name(cityName: string, country: string): Promise<LocationWeatherBuilder> {
        const locationData = await this.osmService.getLocationData(cityName);
        const city = new City(cityName, country);
        
        // Assurez-vous que cette ligne utilise le bon constructeur pour Location
        this.location = new Location(city, locationData.latitude, locationData.longitude); // Ici, j'ai corrigé le constructeur pour utiliser 'city'
        
        return this; // Retourne une instance de 'LocationWeatherBuilder'
    }

    async create(): Promise<LocationWeatherData> {
        const weatherData = await this.weatherService.getWeatherData(
            this.location.getCoordinates().latitude,
            this.location.getCoordinates().longitude
        );

        this.weatherData = new WeatherData(
            weatherData.temperature,
            weatherData.humidity,
            weatherData.windSpeed
        );

        return new LocationWeatherData(this.location, this.weatherData);
    }
}
