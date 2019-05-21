import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialComponent } from './inicial/inicial.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconPickerModule } from 'ngx-icon-picker';

@NgModule({
  declarations: [InicialComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    MatInputModule,
    ColorPickerModule,
    FormsModule,
    IconPickerModule,
    ReactiveFormsModule
  ],
  exports: [
    InicialComponent
  ]
})
export class InicialModule { }
