// models/Location.ts
import { City } from '../value-objects/City';

export class Location {
    private readonly name: string; // Ajouter ce champ pour stocker le nom
    private readonly coordinates: { latitude: number; longitude: number };
    private readonly city: City;

    constructor(city: City, latitude: number, longitude: number) { // Modifiez le constructeur pour correspondre
        this.name = city.getName(); // Utilisez le nom de la ville
        this.coordinates = { latitude, longitude };
        this.city = city;
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
