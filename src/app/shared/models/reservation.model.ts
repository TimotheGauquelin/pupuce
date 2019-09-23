import {Usager} from './usager.model';
import {Justificatif} from './justificatif.model';

export interface Reservation {
    id: number;
    date: string;
    usager: Usager;
    idMarcheAuxPuces: number;
    emplacements: number[];
    typePaiementId: number; // 1: chèque, 2: espèce
    montant: number;
    nomCedeur: string;
    prenomCedeur: string;
    // FIXME: voir Aurore 🚀
    justificatifs: Justificatif[];
}
