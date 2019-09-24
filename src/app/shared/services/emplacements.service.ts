import {Injectable} from '@angular/core';
import {Emplacement} from '../models/emplacement.model';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class EmplacementsService {

    constructor(private http: HttpClient,
                private config: ConfigService) {
    }

    getEmplacement(idMarcheAuxPuces: number, idEmplacement: number): Observable<Emplacement> {
        return this.http.get<Emplacement>(`${this.config.apiURL}/marche-aux-puces/${idMarcheAuxPuces}/emplacements/${idEmplacement}`);
    }

}
