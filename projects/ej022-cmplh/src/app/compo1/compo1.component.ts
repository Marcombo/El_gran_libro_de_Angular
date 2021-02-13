import { Component, OnInit, SimpleChanges, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component implements OnInit {
  @Input() entradaHijo: string = "";
  contador: number = 0;
  constructor() { }
  ngOnInit() { this.mostrar("pasa por ngOnInit"); }
  ngOnChanges(cambios: SimpleChanges) {
    for (let propiedad in cambios) {
      let cambio = cambios[propiedad];
      let actual = JSON.stringify(cambio.currentValue);
      let anterior = JSON.stringify(cambio.previousValue);
      this.mostrar("Pasa por ngOnChanges. Propiedad (" + propiedad + ") valor actual (" + actual + ") valor anterior (" + anterior + ")");
    }
  }
  ngDoCheck() { this.mostrar("pasa por ngDoCheck"); }
  ngAfterContentInit() { this.mostrar("pasa por ngAfterContentInit"); }
  ngAfterContentChecked() { this.mostrar("pasa por ngAfterContentChecked"); }
  ngAfterViewInit() { this.mostrar("pasa por ngAfterViewInit"); }
  ngAfterViewChecked() { this.mostrar("pasa por ngAfterViewChecked"); }
  public mostrar(texto: string) {
    this.contador += 1;
    console.log(this.contador + " - " + texto);
  }
}
