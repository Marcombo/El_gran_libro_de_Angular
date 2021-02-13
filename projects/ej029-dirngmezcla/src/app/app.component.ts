import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = '029 dirNgMezcla';
  mostrar = false;
  numeros:number [] = [1,2,3,4,5,6];
  pares:boolean = true; impares:boolean = true;
  colorPar = 'blue'; colorImpar = 'red';

  clActividad(valor: boolean){
    let classes = { activo: valor, inactivo: !valor };
    return classes;
  }
}
