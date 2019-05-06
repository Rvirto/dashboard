import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  constructor(private toasty: ToastyConfig) {
    this.toasty.theme = 'bootstrap';
  }
}
