import { Injectable } from '@angular/core';
import { Cor } from './cor.model';
import { PizzaModel } from './pizza.model';
import { PizzaDataset } from './pizza-dataset.model';

@Injectable({
  providedIn: 'root'
})
export class DataPizzaService {
  constructor() {}

  public getAlunosMasculinoFeminino(dados: any, cores: Array<Cor>): any {
    const retorno = new PizzaModel();
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
    retorno.labels.push('Meninos', 'Meninas');
    retorno.datasets.push(new PizzaDataset());
    retorno.datasets[0].data.push(meninos[0], meninas[0]);
    retorno.datasets[0].backgroundColor.push(cores[0].cor);
    retorno.datasets[0].backgroundColor.push(cores[1].cor);
    retorno.datasets[0].hoverBackgroundColor.push(cores[2].cor);
    retorno.datasets[0].hoverBackgroundColor.push(cores[3].cor);
    
    return retorno;
  }
}
