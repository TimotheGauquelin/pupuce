export interface Usager {
    nom: string;
    prenom: string;
    email?: string;
    telephone?: string;
    adresse: string;
    ville: string;
    codePostal: string;

    resident: boolean;
    commercant: boolean;
    association: boolean;
}
