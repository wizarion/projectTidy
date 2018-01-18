import { Component } from '@angular/core';
import { TableComponent } from './table/table.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    document.body.style.backgroundColor = "#fcf7f0"
  }
  
}
