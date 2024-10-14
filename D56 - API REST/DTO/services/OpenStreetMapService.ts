// services/OpenStreetMapService.ts
import axios from 'axios';

export class OpenStreetMapService {
    private apiUrl: string = 'https://nominatim.openstreetmap.org/search';

    async getLocationData(cityName: string): Promise<{ latitude: number; longitude: number }> {
        try {
            const response = await axios.get(this.apiUrl, {
               params: {
                    q: cityName,
                    format: 'json',
                    limit: 1
                }
            });

            if (response.data.length > 0) {
                return {
                    latitude: parseFloat(response.data[0].lat),
                    longitude: parseFloat(response.data[0].lon)
                };
            } else {
                throw new Error('No location data found');
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
            throw error; // Propager l'erreur pour gestion ultérieure
        }
    }
}
