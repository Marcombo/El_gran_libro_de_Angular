import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = '028 dirNgStyle';
  color = 'blue';
  hayLetraGrande:boolean  = false;
  hayColorFondo:boolean  = false;
  hayLetraColor:boolean  = false;
  hayLetraItalica:boolean  = false;
  defineEstilos(){
      let styles= {
          'font-size': this.hayLetraGrande ? '300%' : 'initial',
          'background-color': this.hayColorFondo ? '#58FA58' : '#FFFFFF',
          'color': this.hayLetraColor ? 'red' : 'black',
          'font-style': this.hayLetraItalica ? 'italic' : 'normal'
      };
      return styles;
  }
}
