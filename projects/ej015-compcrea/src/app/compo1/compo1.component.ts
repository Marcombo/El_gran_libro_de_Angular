import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
  texto = '';
  saludar() { this.texto = "Hola Mundo en compo1";  }
}
