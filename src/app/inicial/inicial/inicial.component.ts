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
  public icon: string;
  public abrirDialogIcon: boolean = false;

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public open(content): void {
    this.modalService.open(content,
      {ariaLabelledBy: 'modal-basic-title'});
  }

  public showDialog() {
    this.abrirDialogIcon = true;
  }

}
