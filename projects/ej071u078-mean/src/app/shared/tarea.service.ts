import { Injectable } from '@angular/core';
import { TareaModel } from '../shared/tarea.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TareaService {

  constructor(private http: HttpClient) { }
  getAllTareas(): Observable<TareaModel[]> {
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
}
