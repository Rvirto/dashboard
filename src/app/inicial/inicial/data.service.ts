import { Injectable } from '@angular/core';
import { DataBarService } from './data-bar.service';
import { DataPizzaService } from './data-pizza.service';
import { DataLinhaService } from './data-linha.service';
import { Cor } from './cor.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    public bar: DataBarService,
    public pizza: DataPizzaService,
    public linha: DataLinhaService
  ) {}

  public getDadosGrafico(
    view: string,
    dados: any,
    cores: Array<Cor>,
    tipoGrafico: string
  ): any {
    let retorno: any;
    switch (view) {
      case 'view_gbp_meninos_meninas':
        if (tipoGrafico === 'BARRA') {
          retorno = this.bar.getAlunosMasculinoFeminino(dados, cores);
        } else if (tipoGrafico === 'PIZZA') {
          retorno = this.pizza.getAlunosMasculinoFeminino(dados, cores);
        }
        break;
      case 'view_gl_media_aluno_1':
        retorno = this.linha.getAluno1(dados, cores);
    }
    return retorno;
  }
}
