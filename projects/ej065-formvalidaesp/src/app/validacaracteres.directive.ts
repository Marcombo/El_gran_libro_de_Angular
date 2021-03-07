import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from "@angular/forms";

function filtrarCaracteres(caracter:AbstractControl){
  if (caracter.value == null) return null;
  var contenido = caracter.value;
  for(var i = 0; i < contenido.length; i++){
    var letra = contenido.substr(i,1);
    var valor = letra.charCodeAt(0);
    if (!(valor >=65 && valor <= 90)){
      return {filtrarCaracteres: true};
    }
  }
  return null;
}

@Directive({
  selector: '[filtrar-caracteres]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue: filtrarCaracteres}
  ]
})
export class FiltrarCaracteres {

}
