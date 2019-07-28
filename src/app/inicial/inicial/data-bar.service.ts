import { Injectable } from '@angular/core';
import { BarModel } from './bar.model';
import { BarDataset } from './bar-dataset.model';
import { Cor } from './cor.model';

@Injectable({
  providedIn: 'root'
})
export class DataBarService {
  constructor() {}

  public getAlunosMasculinoFeminino(dados: any, cores: Array<Cor>): any {
    const retorno = new BarModel();
    const meninas = new Array<number>();
    const meninos = new Array<number>();
    meninas.push(0);
    meninos.push(0);

    console.log(cores);
    dados.forEach(dado => {
      if (dado.sexo === 'M') {
        meninos[0]++;
      } else {
        meninas[0]++;
      }
    });

    // Geração de Retorno
    retorno.labels.push('Dados');
    retorno.datasets.push(
      new BarDataset('Meninas', cores[0].cor, cores[1].cor, meninas)
    );
    retorno.datasets.push(
      new BarDataset('Meninos', cores[2].cor, cores[3].cor, meninos)
    );
    console.log('Retorno', retorno);

    return retorno;
  }

  // entidades
}
