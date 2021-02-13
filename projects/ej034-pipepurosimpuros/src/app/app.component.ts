import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fechas: Date[] = [];
  anadirFecha() {
    this.fechas.push(new Date());
    //let fechas2 = this.fechas.slice();
    //this.fechas = fechas2;
  }
}
