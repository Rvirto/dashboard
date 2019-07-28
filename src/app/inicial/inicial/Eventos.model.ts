import { EventEmitter } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { GridsterItemVO } from './gridster-item-vo.model';
export class Eventos {
  public static criarWidget = new EventEmitter<GridsterItemVO>();
  public static atualizarWidget = new EventEmitter<GridsterItem>();
  public static removerWidget = new EventEmitter<GridsterItem>();
  public static atualizarCorMenuItem = new EventEmitter<string>();
}
