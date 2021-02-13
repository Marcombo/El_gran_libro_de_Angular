import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = '027 dirNgModel';
  nombre  = '';
  nombre2 = '';
  cambiaNombre() {
    this.nombre=this.nombre.toLowerCase();
    this.nombre2=this.nombre.toUpperCase();
  }
  cambiaNombre2() {
    this.nombre2=this.nombre2.toUpperCase();
    this.nombre=this.nombre2.toLowerCase();
  }
}
