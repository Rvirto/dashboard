import { EventEmitter } from '@angular/core';

export class Eventos {
  public static atualizarWidget = new EventEmitter<any>();
  public static redimensionarWidget = new EventEmitter<any>();

}
