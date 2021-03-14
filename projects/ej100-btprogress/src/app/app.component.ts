import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '100 Bootstrap Progress';
  valor: string = "20";
  valorN: number = 20;
  valorT: string = "20%";
  incr: number = 1;
  onChange(event: any) {
    this.valorN = parseInt(event.target.value);
    this.valorT = this.valorN + "%";
  }
  onClick(action: string) {
    console.log("action " + action);
    if (action == "+") { this.incr = 1; } else { this.incr = -1; }
    this.valorN = parseInt(this.valor) + this.incr;
    if (this.valorN < 0) this.valorN = 0;
    if (this.valorN > 100) this.valorN = 100;
    this.valor = this.valorN.toString();
    this.valorT = this.valorN + "%";
  }
}
