import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '082 intJSON';
  persona = { "codigo":1,
  "nombre":"Juan",
  "aficiones":["Leer","Escribir","Musica"]
}
personas = [
  { "codigo": 1, "nombre": "Juanto" },
  { "codigo": 2, "nombre": "Miquel" },
  { "codigo": 3, "nombre": "Andres" }
]
ngOnInit(){
  var nuevoObjeto = JSON.parse('{"codigo":"2","nombre":"Paco"}');
  console.log("Codigo  : " + nuevoObjeto.codigo);
  console.log("Nombre  : " + nuevoObjeto.nombre);
  console.log("Persona : " + JSON.stringify(this.persona));
  console.log("Personas: " + JSON.stringify(this.personas));
  console.log("Personas (1) - codigo: " + JSON.stringify(this.personas[0].codigo));
  console.log("Personas (1) - nombre: " + JSON.stringify(this.personas[0].nombre));
  console.log("Personas (2) - codigo: " + JSON.stringify(this.personas[1].codigo));
  console.log("Personas (2) - nombre: " + JSON.stringify(this.personas[1].nombre));
  console.log("Personas (3) - codigo: " + JSON.stringify(this.personas[2].codigo));
  console.log("Personas (3) - nombre: " + JSON.stringify(this.personas[2].nombre));
  console.log(this.personas);
}
}
