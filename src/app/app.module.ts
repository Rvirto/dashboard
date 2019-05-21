import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicialModule } from './inicial/inicial.module';
import { ToastyModule } from 'ng2-toasty';
import { BarraModule } from './barra/barra.module';
import { DashboardInterativoModule } from './dashboard-interativo/dashboard-interativo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InicialModule,
    BarraModule,
    DashboardInterativoModule,
    BrowserAnimationsModule,

    ToastyModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
