import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridsterItem } from 'angular-gridster2';
import { Observable } from 'rxjs';
import { GridsterItemVO } from './gridster-item-vo.model';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  public desempacotarWidget(item: GridsterItemVO): GridsterItem {
    let retorno: GridsterItem;
    retorno = {
      id: item.id,
      dashboard: item.dashboard,
      dragEnabled: item.dragEnabled,
      resizeEnabled: item.dragEnabled,
      cols: item.cols,
      rows: item.rows,
      x: item.x,
      y: item.y,
      titulo: item.titulo,
      tipoGrafico: item.tipoGrafico,
      view: item.view,
      cor: item.cor
    };
    return retorno;
  }
  public empacotarWidget(item: GridsterItem): GridsterItemVO {
    const retorno = new GridsterItemVO();
    retorno.id = item.id;
    retorno.dashboard = item.dashboard;
    retorno.cols = item.cols;
    retorno.rows = item.rows;
    retorno.x = item.x;
    retorno.y = item.y;
    retorno.dragEnabled = item.dragEnabled;
    retorno.resizeEnabled = item.resizeEnabled;
    retorno.tipoGrafico = item.tipoGrafico;
    retorno.titulo = item.titulo;
    retorno.view = item.view;
    retorno.cor = item.cor;
    return retorno;
  }
  constructor(private http: HttpClient) {}

  public atualizarWidget(widget: GridsterItemVO): Observable<GridsterItemVO> {
    return this.http.put<GridsterItemVO>(
      'http://localhost:8080/gridsterItem/' + widget.id,
      widget
    );
  }

  public criarWidget(item: GridsterItemVO): Observable<GridsterItemVO> {
    return this.http.post<GridsterItemVO>(
      'http://localhost:8080/gridsterItem/',
      item
    );
  }

  public excluirWidget(id: string): Observable<any> {
    return this.http.delete('http://localhost:8080/gridsterItem/' + id);
  }

  public getData(): Observable<any> {
    return this.http.get('http://localhost:8080/media');
  }
}
