import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarcheAuxPucesComponent} from './pages/marcheAuxPuces/marcheAuxPuces.component';
import {InformationsComponent} from './pages/informations/informations.component';
import {JustificatifsComponent} from './pages/justificatifs/justificatifs.component';

const routes: Routes = [
  {path: 'marches-aux-puces', component: MarcheAuxPucesComponent},
  {path: 'informations', component: InformationsComponent},
  {path: 'justificatifs', component: JustificatifsComponent},
  {path: '**', redirectTo: 'marches-aux-puces'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
