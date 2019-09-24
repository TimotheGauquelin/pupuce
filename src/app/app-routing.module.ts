import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MarcheAuxPucesComponent} from './pages/marcheAuxPuces/marcheAuxPuces.component';
import {InformationsComponent} from './pages/informations/informations.component';
import {JustificatifsComponent} from './pages/justificatifs/justificatifs.component';
import {EmplacementComponent} from './pages/emplacement/emplacement.component';
import {PaiementComponent} from './pages/paiement/paiement.component';
import {InscriptionValideeComponent} from './pages/inscription-validee/inscription-validee.component';
import { SelectionTableComponent } from './pages/selection-table/selection-table.component';
import { NumeroReservationComponent } from './pages/numero-reservation/numero-reservation.component';

const routes: Routes = [
    {path: 'marches-aux-puces', component: MarcheAuxPucesComponent},
    {path: 'marches-aux-puces/:id/informations', component: InformationsComponent},
    {path: 'justificatifs', component: JustificatifsComponent},
    {path: 'emplacement', component: EmplacementComponent},
    {path: 'paiement', component: PaiementComponent},
    {path: 'inscription-validee', component: InscriptionValideeComponent},
    {path: 'selection-table', component: SelectionTableComponent},
    {path: 'marches-aux-puces/:id/code-reservation/:code', component: NumeroReservationComponent},
    {path: '**', redirectTo: 'selection-table'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
