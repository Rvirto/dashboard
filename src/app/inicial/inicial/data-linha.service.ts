import { Injectable } from '@angular/core';
import { Cor } from './cor.model';
import { LinhaModel } from './linha.model';
import { LinhaDataset } from './linha-dataset.model';

@Injectable({
  providedIn: 'root'
})
export class DataLinhaService {
  constructor() {}

  public getAluno1(dados: any, cores: Array<Cor>): any {
    const retorno = new LinhaModel();
    retorno.labels.push('1º Semestre', '2º Semestre', '3º Semestre');
    retorno.datasets.push(new LinhaDataset());
    retorno.datasets[0].label = 'Aluno 1';
    retorno.datasets[0].data.push(dados[0].media);
    retorno.datasets[0].data.push(dados[1].media);
    retorno.datasets[0].data.push(dados[2].media);
    retorno.datasets[0].fill = false;
    retorno.datasets[0].borderColor = cores[0].cor;
    return retorno;
  }
}
