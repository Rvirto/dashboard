import { Injectable } from '@angular/core';
import { DataBarService } from './data-bar.service';
import { Cor } from './cor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public bar: DataBarService) {}

  public getDadosGrafico(view: string, dados: any, cores: Array<Cor>): any {
    let retorno: any;
    switch (view) {
      case 'view_gb_meninos_meninas':
        retorno = this.bar.getAlunosMasculinoFeminino(dados, cores);
        break;
    }
    return retorno;
  }
}
