// models/WeatherData.ts
export class WeatherData {
    private readonly temperature: number;
    private readonly humidity: number;
    private readonly windSpeed: number;

    constructor(temperature: number, humidity: number, windSpeed: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.windSpeed = windSpeed;
    }

    getTemperature(): number {
        return this.temperature;
    }

    getHumidity(): number {
        return this.humidity;
    }

    getWindSpeed(): number {
        return this.windSpeed;
    }

    toString(): string {
        return `Temperature: ${this.temperature}°C, Humidity: ${this.humidity}%, Wind Speed: ${this.windSpeed} m/s`;
    }
}
