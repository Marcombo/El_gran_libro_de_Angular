import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '096 Bootstrap Dropdowns';
  res1:string = "Azul";
  color1:string = '#A9F5F2';
  onClick(par:string){
    this.res1=par;
    console.log("par " + this.res1);
    switch(this.res1) {
      case "Verde": this.color1 = "#A9F5BC"; break;
      case "Amarillo": this.color1 = "#FFFF00"; break;
      default: this.color1 = "#A9F5F2"; break;
    }
  }
}
