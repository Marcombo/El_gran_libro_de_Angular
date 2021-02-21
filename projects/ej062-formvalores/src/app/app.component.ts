import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '062 formValores';
  codigo:string="";
  nombre:string="";
  edad:number = 20;
  opcion:string="2";
  comentarios:string="";
  sexo:string = "hombre";
  activar:boolean = true;
  mostrarVar(){
    console.log(
      "Codigo ("+ this.codigo + ") "
      + "Nombre (" + this.nombre+ ") "
      + "Edad (" + this.edad+ ") "
      + "Opcion (" + this.opcion+ ") "
      + "Comentarios (" + this.comentarios+ ") "
      + "Sexo (" + this.sexo+ ") "
      + "Activar (" + this.activar+ ")"
    );
  }
  onSubmit(){
    console.log("Submit");
  }  
}
