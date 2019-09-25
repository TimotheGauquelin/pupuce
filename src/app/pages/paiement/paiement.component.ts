import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ReservationsService} from '../../shared/services/reservations.service';

@Component({
    selector: 'app-paiement',
    templateUrl: './paiement.component.html',
    styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent {

    private codeReservation: number;
    private idMarche: number;
    public sommeAPayer: number;

    constructor(route: ActivatedRoute,
                private router: Router,
                private reservationService: ReservationsService) {
        route.params.subscribe((params: Params) => {
            this.codeReservation = params.code;
            this.idMarche = params.id;
            this.calculSommeAPayer(); // Apelle la fonction au chargement de la page
        });
    }

    private redirectionSynthese() {
        this.router.navigate([`marches-aux-puces/${this.idMarche}/reservations/${this.codeReservation}/synthese`]);
    }

    private calculSommeAPayer() {
        this.reservationService.getReservation(this.idMarche, this.codeReservation).subscribe(reservation => {
            this.sommeAPayer = reservation.montant;
        });
    }

    public submitBordereau(formulaire: { modePaiment: string, numeroBorderau: string }) {
        this.reservationService.setBordereau(this.idMarche, this.codeReservation, formulaire.numeroBorderau).subscribe(() => {
            this.redirectionSynthese();
        });
    }
}
