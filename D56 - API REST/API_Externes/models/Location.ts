// models/Location.ts
import { City } from '../value-objects/City';

export class Location {
    private readonly name: string; // Ajout de `name` comme paramètre du constructeur
    private readonly coordinates: { latitude: number; longitude: number };
    private readonly city: City;

    // Ajout du paramètre `name` au constructeur
    constructor(name: string, city: City, latitude: number, longitude: number) {
        this.name = name; // Initialisation de `name`
        this.coordinates = { latitude, longitude }; // Initialisation de `coordinates`
        this.city = city; // Initialisation de `city`
    }

    getName(): string {
        return this.name;
    }

    getCoordinates(): { latitude: number; longitude: number } {
        return this.coordinates;
    }

    getCity(): City {
        return this.city;
    }

    toString(): string {
        return `${this.name} (${this.city.toString()}), Coordinates: [${this.coordinates.latitude}, ${this.coordinates.longitude}]`;
    }
}
