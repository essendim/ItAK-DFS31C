// dtos/LocationWeatherData.ts
import { Location } from '../models/Location';
import { WeatherData } from '../models/WeatherData';

export class LocationWeatherData {
    private readonly locationName: string;
    private readonly city: string;
    private readonly coordinates: { latitude: number; longitude: number };
    private readonly temperature: number;
    private readonly humidity: number;
    private readonly windSpeed: number;

    constructor(location: Location, weather: WeatherData) {
        this.locationName = location.getName();
        this.city = location.getCity().toString();
        this.coordinates = location.getCoordinates();
        this.temperature = weather.getTemperature();
        this.humidity = weather.getHumidity();
        this.windSpeed = weather.getWindSpeed();
    }

    // Cette méthode retourne un objet prêt à être exposé dans une API REST
    toPlainObject(): object {
        return {
            locationName: this.locationName,
            city: this.city,
            coordinates: this.coordinates,
            temperature: this.temperature,
            humidity: this.humidity,
            windSpeed: this.windSpeed,
        };
    }
}
