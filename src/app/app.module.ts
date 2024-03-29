import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { CargandoComponent } from './cargando/cargando.component';
import { TerminadoComponent } from './terminado/terminado.component';
import { ErrorComponent } from './error/error.component';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ArchivosComponent,
    CargandoComponent,
    TerminadoComponent,
    ErrorComponent
  ],
  imports: [
    FlashMessagesModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
