
type TareaEstados = "Por hacer" | "En progreso" | "Hecha";
export var TareaEstadosSelect = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];

export class TareaModel {
    constructor(
    	public _id: string,
      public titulo: string,
      public fecha: Date,
      public estado: TareaEstados
	) {}
}
