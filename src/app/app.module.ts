import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './shared/menu/menu.component';
import {MatStepperModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {TitleComponent} from './pages/marcheAuxPuces/title/title.component';
import {MarcheAuxPucesComponent} from './pages/marcheAuxPuces/marcheAuxPuces.component';
import {RouterModule} from '@angular/router';
import { InformationsComponent } from './pages/informations/informations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    TitleComponent,
    MarcheAuxPucesComponent,
    InformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'marches-aux-puces', component: MarcheAuxPucesComponent},
      {path: '**', redirectTo: 'marches-aux-puces'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
