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
import { DialogModule } from 'primeng/components/dialog/dialog';
import { GridsterModule } from 'angular-gridster2';
import { TabMenuModule } from 'primeng/components/tabmenu/tabmenu';
import { InicialServiceService } from './inicial/inicial-service.service';
import { ToastModule } from 'primeng/components/toast/toast';
import { MessageService } from 'primeng/components/common/messageservice';
import { ButtonModule } from 'primeng/components/button/button';
import { ChartModule } from 'primeng/chart';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BarraDashboardViewComponent } from './inicial/barra-dashboard-view.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { WidgetService } from './inicial/widget.service';
import { ViewService } from './inicial/view.service';
import { WidgetComponent } from './inicial/widget.component';
@NgModule({
  declarations: [InicialComponent, BarraDashboardViewComponent, WidgetComponent],
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
    ReactiveFormsModule,
    DialogModule,
    GridsterModule,
    TabMenuModule,
    ToastModule,
    ButtonModule,
    ChartModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [InicialComponent],
  providers: [InicialServiceService, MessageService, ViewService, WidgetService]
})
export class InicialModule {}
