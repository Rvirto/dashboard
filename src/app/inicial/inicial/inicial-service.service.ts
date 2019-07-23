import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.model';
import { GridsterItem } from 'angular-gridster2';

@Injectable({
  providedIn: 'root'
})
export class InicialServiceService {

  private urlTabMenu: string  = 'http://localhost:8080/menuItem';
  private urlDashboard: string = 'http://localhost:8080/dashboard';
  private urlGridster: string = 'http://localhost:8080/gridsterItem';

  constructor(private httpCliente: HttpClient) { }

  public buscarTabMenu(): Observable<MenuItem[]> {
    return this.httpCliente.get<MenuItem[]>(this.urlTabMenu);
  }

  public buscarDashboard(): Observable<Dashboard[]> {
    return this.httpCliente.get<Dashboard[]>(this.urlDashboard);
  }

  public incluirTabMenu(tabMenu) {
    return this.httpCliente.post(this.urlTabMenu, tabMenu, {
      observe: 'response',
      responseType: 'text'
    });
  }

  public incluirDashboard(dashboard: Dashboard) {
    return this.httpCliente.post(this.urlDashboard, dashboard, {
      observe: 'response',
      responseType: 'text'
    });
  }

  public incluirGridsterItem(widgets: GridsterItem) {
    return this.httpCliente.post(this.urlGridster, widgets, {
      observe: 'response',
      responseType: 'text'
    });
  }

  public buscarDashboardId(id: string): Observable<Dashboard> {
    return this.httpCliente.get<Dashboard>(`${this.urlDashboard}/${id}`);
  }
}
