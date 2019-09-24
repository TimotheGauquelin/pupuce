import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
    selector: 'app-numero-reservation',
    templateUrl: './numero-reservation.component.html',
    styleUrls: ['./numero-reservation.component.scss']
})
export class NumeroReservationComponent {

    public codeReservation = '';

    constructor(route: ActivatedRoute) {
        route.params.subscribe((params: Params) => {
            this.codeReservation = params.code;
        });
    }

}
