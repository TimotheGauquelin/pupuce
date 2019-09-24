import {Router, ActivatedRoute, Params } from '@angular/router';
import {Component} from '@angular/core';
import {MarchesAuxPucesService} from '../../shared/services/marches-aux-puces.service';
import {MarcheAuxPuces} from '../../shared/models/marche-aux-puces.model';
@Component({
    selector: 'app-marche-aux-puces',
    templateUrl: './marcheAuxPuces.component.html',
    styleUrls: ['./marcheAuxPuces.component.scss']
})
export class MarcheAuxPucesComponent {

    public marchesAuxPuces: MarcheAuxPuces[] = [];


    constructor(private router: Router, route: ActivatedRoute,
                private marchesAuxPucesService: MarchesAuxPucesService) {
        marchesAuxPucesService.getAllNextMarchesAuxPuces().subscribe((marchesAuxPuces: MarcheAuxPuces[]) => {
            this.marchesAuxPuces = marchesAuxPuces;
        });
    }

    goToInformations(id: number): void {
        this.router.navigateByUrl(
            `/marche-aux-puces/${id}/informations`
        );
    }

}
