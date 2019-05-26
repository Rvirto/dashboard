import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial/inicial/inicial.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: '', component: InicialComponent}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
