import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {View } from './view.model';
import { GrupoDeViews} from './grupo-views.model';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  constructor(private http: HttpClient) {}

  public buscarViews(): Observable<View[]> {
    return this.http.get<View[]>('http://localhost:8080/user-view');
  }

  public getGrupoDeViews(views: View[]): GrupoDeViews {
    const grupo = new GrupoDeViews();
    views.forEach(view => {
      const prefixo: string = view.codigoView.split('_')[1];
      for (let index = 0; index < prefixo.length; index++) {
        if (prefixo.charAt(index) === 'n') {
          grupo.numerico.push(view);
        } else if (prefixo.charAt(index) === 'b') {
          grupo.barra.push(view);
        } else if (prefixo.charAt(index) === 'p') {
          grupo.pizza.push(view);
        } else if (prefixo.charAt(index) === 'l') {
          grupo.linha.push(view);
        }
      }
    });
    return grupo;
  }

  public getView(enderecoView: string): Observable<any> {
    return this.http.get('http://localhost:8080/views/values/' + enderecoView);
  }
}
