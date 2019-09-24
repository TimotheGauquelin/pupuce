import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    // public readonly apiURL = 'https://faches-thumesnil.fr/marches-aux-puces/api/v1';
    public readonly apiURL = 'http://localhost:8080';
}
