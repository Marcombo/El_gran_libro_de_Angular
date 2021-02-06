
type TareaEstados = "Por hacer" | "En progreso" | "Hecha";
export var TareaEstadosSelect = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];

export interface TareaModel {
    _id: string;
    titulo: string;
    fecha: Date;
    estado: TareaEstados;
}

export class TareaNew implements Omit<TareaModel, '_id'> {
  constructor(
    public titulo: string = '',
    public fecha: Date = new Date(),
    public estado: TareaEstados = "Por hacer"
  ) {}
}
