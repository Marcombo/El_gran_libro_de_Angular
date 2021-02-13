import { Component, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css']
})
export class Compo1Component {
    @Input() valor1: string = '';
    @Input() valor2: string = '';
    aux1: number = 0;
    aux2: number = 0;
    @Output()
    envRes: EventEmitter<number> = new EventEmitter<number>();
    ngAfterContentChecked() {
        this.aux1 = parseFloat(this.valor1);
        this.aux2 = parseFloat(this.valor2);
    }
    suma()       { this.envRes.emit(this.aux1 + this.aux2); }
    resta()      { this.envRes.emit(this.aux1 - this.aux2); }
    multiplica() { this.envRes.emit(this.aux1 * this.aux2); }
    divide()     { this.envRes.emit(this.aux1 / this.aux2); }
}
