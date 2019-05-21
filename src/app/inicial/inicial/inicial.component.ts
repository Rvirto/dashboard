import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  public corDoDashboard: string = '#1fc3c3';
  public myFormGroup: FormGroup;
  public iconCss = new FormControl();
  public fallbackIcon = 'fa fa-pie-chart';
  public icon: string;

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.myFormGroup = new FormGroup({iconCss: this.iconCss});
  }

  onIconPickerSelect(icon: string): void {
    this.iconCss.setValue(icon);
  }

  public open(content): void {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'});
  }

}
