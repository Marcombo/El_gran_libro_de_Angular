
type TareaEstados = "Por hacer" | "En progreso" | "Hecha";
export var TareaEstadosSelect = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];

export class TareaModel {
    constructor(
      public _id: string | undefined = undefined,
      public titulo: string = '',
      public fecha: Date = new Date(),
      public estado: TareaEstados = "Por hacer"
	) {}
}
