// value-objects/City.ts
export class City {
    private readonly name: string;
    private readonly country: string;

    constructor(name: string, country: string) {
        this.name = name;
        this.country = country;
    }

    getName(): string {
        return this.name;
    }

    getCountry(): string {
        return this.country;
    }

    toString(): string {
        return `${this.name}, ${this.country}`;
    }
}
