import { Injectable } from '@angular/core';
import { TareaModel, TareaNew } from '../shared/tarea.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TareaService {

  constructor(private http: HttpClient) { }
  getAllTareas(): Observable<TareaModel[]> {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
  getTarea(id: string): Observable<TareaModel>{
    return this.http.get<TareaModel>('http://localhost:3000/api/tareas/' + id);
  }  
  addTarea(tarea: TareaNew): Observable<TareaModel>{
    return this.http.post<TareaModel>('http://localhost:3000/api/tareas', { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado});
  }
  updateTarea(tarea: TareaModel): Observable<TareaModel>{
    return this.http.put<TareaModel>('http://localhost:3000/api/tareas/' + tarea._id, { titulo: tarea.titulo, fecha: tarea.fecha, estado: tarea.estado});
  }
  deleteTarea(id: string): Observable<string>{
    return this.http.delete<string>('http://localhost:3000/api/tareas/' + id);
  }
}
