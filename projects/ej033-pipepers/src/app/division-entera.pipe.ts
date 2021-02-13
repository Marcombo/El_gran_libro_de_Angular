import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'divisionEntera'
})
export class DivisionEnteraPipe implements PipeTransform {

  transform(value: number, div: number): string {
    let cociente = Math.floor(value/div);
    let resto = value % div;

    return "Cociente: " + cociente + " # Resto: " + resto;
  }


}
