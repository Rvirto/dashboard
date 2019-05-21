import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial/inicial/inicial.component';
import { NgModule } from '@angular/core';
import { DashboardInterativoComponent } from './dashboard-interativo/dashboard-interativo/dashboard-interativo.component';

const routes: Routes = [
    {path: '', component: InicialComponent},
    {path: 'novo', component: DashboardInterativoComponent}
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
