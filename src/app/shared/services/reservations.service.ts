import {Injectable} from '@angular/core';
import {Usager} from '../models/usager.model';
import {Reservation} from '../models/reservation.model';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReservationsService {

    private usager: Usager;

    constructor(private http: HttpClient,
                private config: ConfigService) {
    }

    // TODO: à la validation de la page "informations", appeler cette méthode
    public setUsager(usager: Usager) {
        this.usager = usager;
    }

    public saveReservationAndGetCode(idMarcheAuxPuces: number, reservation: Reservation): Observable<number> {
        return this.http.post<number>(`${this.config.apiURL}/marche-aux-puces/${idMarcheAuxPuces}/reservations`, reservation);
    }

    public getReservation(idMarcheAuxPuces: number, idReservation: number): Observable<Reservation> {
        return this.http.get<Reservation>(
            `${this.config.apiURL}/marche-aux-puces/${idMarcheAuxPuces}/reservations/${idReservation}`
        );
    }

    public setEmplacements(idMarcheAuxPuces: number, idReservation: number, emplacements: number[]): Observable<void> {
        return this.http.patch<void>(
            `${this.config.apiURL}/marche-aux-puces/${idMarcheAuxPuces}/reservations/${idReservation}`,
            {emplacements},
        );
    }

    public setBordereau(idMarcheAuxPuces: number, idReservation: number, numeroBordereau: string): Observable<void> {
        return this.http.patch<void>(
            `${this.config.apiURL}/marche-aux-puces/${idMarcheAuxPuces}/reservations/${idReservation}`,
            {numeroBordereau},
        );
    }

}
