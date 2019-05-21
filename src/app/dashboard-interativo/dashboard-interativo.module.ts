import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInterativoComponent } from './dashboard-interativo/dashboard-interativo.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [DashboardInterativoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    DashboardInterativoComponent
  ]
})
export class DashboardInterativoModule { }
