import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { View } from './view.model';

@Component({
  selector: 'app-barra-dashboard-view',
  templateUrl: './barra-dashboard-view.component.html',
  styleUrls: ['./barra-dashboard-view.component.scss']
})
export class BarraDashboardViewComponent implements OnInit {
  @Input() dados = new Array<View>();
  @Output() getView = new EventEmitter<View>();
  constructor() {}

  ngOnInit() {
  }

  public selecionarView(view: View): void {
    this.getView.emit(view);
  }
}
