import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { Cor } from './cor.model';
import { WidgetService } from './widget.service';
import { ViewService } from './view.service';
import { DataService } from './data.service';
import { Eventos } from './Eventos.model';
import { GridsterItemVO } from './gridster-item-vo.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, OnChanges {
  @Input() widget: GridsterItemVO;
  @Output() excluir = new EventEmitter();
  @Output() atualizar = new EventEmitter();
  public travado = false;
  public cores = new Array<Cor>();
  public menuExibido: string;
  public telaDeEdicao: boolean;

  data: any;

 // GRAFICO CORREÇÃO
 public chartOptions = {
  scales: {
    yAxes: [{
      ticks: {
        stepSize: 2,
        beginAtZero: true
      }
    }]
  }
}


  constructor(
    private viewService: ViewService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.menuExibido = 'inicio';
    if (this.widget.dragEnabled || this.widget.resizeEnabled) {
      this.travado = false;
      this.widget.dragEnabled = true;
      this.widget.resizeEnabled = true;
    } else {
      this.travado = true;
      this.widget.dragEnabled = false;
      this.widget.resizeEnabled = false;
    }
    this.getDadosDoGrafico();
    this.widget.cor.split(';').forEach(cor => {
      this.cores.push(new Cor(cor));
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  public excluirWidget(): void {
    this.excluir.emit();
  }

  public trocarMenu(): void {
    this.menuExibido =
      this.menuExibido === 'inicio' ? 'configuracao' : 'inicio';
  }

  public switchTravar(): void {
    if (this.travado) {
      this.widget.dragEnabled = true;
      this.widget.resizeEnabled = true;
      this.travado = false;
    } else {
      (this.widget.dragEnabled = false), (this.widget.resizeEnabled = false);
      this.travado = true;
    }
    Eventos.atualizarWidget.emit(this.widget);
    this.atualizar.emit();
  }

  public getDadosDoGrafico(): void {
    console.log(this.widget);
    
    if (this.widget.tipoGrafico === 'NUMERICO') {
      this.viewService
        .getView(this.widget.view)
        .subscribe(x => (this.data = x[0].count));
    } else if (this.widget.tipoGrafico === 'BARRA') {
      let dadosDeEntrada: any;
      this.viewService.getView(this.widget.view).subscribe(dados => {
        dadosDeEntrada = dados;
        const cores = new Array<Cor>();
        for (let i = 1; i < this.cores.length; i++) {
          cores.push(this.cores[i]);
        }
        this.data = this.dataService.getDadosGrafico(
          this.widget.view,
          dadosDeEntrada,
          cores,
          this.widget.tipoGrafico
        );
      });
    } else if (this.widget.tipoGrafico === 'PIZZA') {
      let dadosDeEntrada: any;
      this.viewService.getView(this.widget.view).subscribe(dados => {
        dadosDeEntrada = dados;
        const cores = new Array<Cor>();
        for (let i = 1; i < this.cores.length; i++) {
          cores.push(this.cores[i]);
        }
        this.data = this.dataService.getDadosGrafico(
          this.widget.view,
          dadosDeEntrada,
          cores,
          this.widget.tipoGrafico
        );
        console.log(this.data);
      });
    } else if (this.widget.tipoGrafico === 'LINHA') {
      let dadosDeEntrada: any;
      this.viewService.getView(this.widget.view).subscribe(dados => {
        dadosDeEntrada = dados;
        const cores = new Array<Cor>();
        for (let i = 1; i < this.cores.length; i++) {
          cores.push(this.cores[i]);
        }
        this.data = this.dataService.getDadosGrafico(
          this.widget.view,
          dadosDeEntrada,
          cores,
          this.widget.tipoGrafico
        );
        console.log(this.data);
      });
    }
  }
}
