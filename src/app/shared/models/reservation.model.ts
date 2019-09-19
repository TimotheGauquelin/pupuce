import {Usager} from './usager.model';

export interface Reservation {
    id: number;
    date: string;
    usager: Usager;
    // paiement
    // justificatifs
    // cession ???
}
