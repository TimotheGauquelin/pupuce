import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './shared/components/menu/menu.component';
import {MatStepperModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {TitleComponent} from './shared/components/title/title.component';
import {MarcheAuxPucesComponent} from './pages/marcheAuxPuces/marcheAuxPuces.component';
import {InformationsComponent} from './pages/informations/informations.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {NavigationButtonsComponent} from './shared/components/navigation-buttons/navigation-buttons.component';
import {JustificatifsComponent} from './pages/justificatifs/justificatifs.component';
import {EmplacementComponent} from './pages/emplacement/emplacement.component';
import {PaiementComponent} from './pages/paiement/paiement.component';
import {InscriptionValideeComponent} from './pages/inscription-validee/inscription-validee.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        TitleComponent,
        MarcheAuxPucesComponent,
        InformationsComponent,
        NavigationButtonsComponent,
        JustificatifsComponent,
        EmplacementComponent,
        PaiementComponent,
        InscriptionValideeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatStepperModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
