import { AbstractControl} from "@angular/forms";

export class FiltrarCaracteres {
  static filtrarCaracteres(caracter:AbstractControl){
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
}
