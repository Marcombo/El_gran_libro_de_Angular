import { Component } from '@angular/core';
import { Operaciones } from './operaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej019-cmptest';
  res1 = 0;
  res2 = 0;
  res3 = 0;
  res4 = 0;
  ngOnInit(){
    let operaciones = new Operaciones();
    this.res1=operaciones.sumar(3,5);
    this.res2=operaciones.restar(9,5);
    this.res3=operaciones.multiplicar(5,8);
    this.res4=operaciones.dividir(12,4);
  }
}
