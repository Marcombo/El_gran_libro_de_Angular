import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styles: [`
    p { font-size: xx-large ; background-color: yellow; }
    h2 { color: blue; }
    `]
})
export class Compo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
