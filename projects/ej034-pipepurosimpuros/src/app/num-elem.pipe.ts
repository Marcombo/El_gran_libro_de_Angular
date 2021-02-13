import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numElem',
  pure: false
})
export class NumElemPipe implements PipeTransform {

  transform(cadena: any[]): number {
    return cadena.length;
  }


}
