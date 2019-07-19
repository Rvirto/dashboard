import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Observable } from 'rxjs';
import { Dashboard } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class InicialServiceService {

  private urlTabMenu: string  = 'http://localhost:8080/menuItem';
  private urlDashboard: string = 'http://localhost:8080/dashboard';

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

  public buscarDashboardId(id: string): Observable<Dashboard> {
    return this.httpCliente.get<Dashboard>(`${this.urlDashboard}/${id}`);
  }
}
