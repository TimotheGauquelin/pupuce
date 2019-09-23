import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MarcheAuxPuces} from '../models/marche-aux-puces.model';
import {HttpClient} from '@angular/common/http';
import {filter, flatMap, toArray} from 'rxjs/operators';
import {ConfigService} from '../config.service';

@Injectable({
    providedIn: 'root'
})
export class MarchesAuxPucesService {

    constructor(private http: HttpClient,
                private config: ConfigService) {
    }

    getAllNextMarchesAuxPuces(): Observable<MarcheAuxPuces[]> {
        return this.http.get<MarcheAuxPuces[]>(this.config.apiURL + '/marches-aux-puces').pipe(
            flatMap(e => e),
            filter((marcheAuxPuce: MarcheAuxPuces) => {
                // TODO: vérifier que le format de date est OK
                return new Date(marcheAuxPuce.date) >= new Date();
            }),
            toArray(),
        );

        // TODO: remplacer ce code par l'appel à l'API quand celle-ci sea développée... 🦄
        // return of([{
        //     id: 1,
        //     date: '28/04/2019',
        //     nomSecteur: 'Thumesnil',
        //     nombreEmplacementTotal: 90,
        //     nombreEmplacementReserve: 24,
        // }, {
        //     id: 2,
        //     date: '29/09/2019',
        //     nomSecteur: 'Faches',
        //     nombreEmplacementTotal: 78,
        //     nombreEmplacementReserve: 54,
        // }]);
    }

}
