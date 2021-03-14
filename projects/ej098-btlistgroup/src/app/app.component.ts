import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '098 Bootstrap List group';
  res1: string = "?";
  color1: string = '#D8D8D8';
  num1: number = 0;
  num2: number = 0;
  num3: number = 0;
  onClick(par: string) {
    this.res1 = par;
    switch (this.res1) {
      case "Verde": this.color1 = "#A9F5BC"; this.num2 += 1; break;
      case "Amarillo": this.color1 = "#FFFF00"; this.num3 += 1; break;
      case "Azul": this.color1 = "#A9F5F2"; this.num1 += 1; break;
    }
  }
}
