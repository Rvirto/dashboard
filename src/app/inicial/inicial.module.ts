import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InicialComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    InicialComponent
  ]
})
export class InicialModule { }
