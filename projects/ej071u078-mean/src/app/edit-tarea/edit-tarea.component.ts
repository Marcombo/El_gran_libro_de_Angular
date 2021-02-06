import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaEstadosSelect, TareaNew, TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.scss']
})
export class EditTareaComponent implements OnInit {
  tarea: TareaNew | TareaModel | undefined = undefined;
  tareaEstadosSelect = TareaEstadosSelect;
  title = '';

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (id) {
          this.title = 'Modificar Tarea';
          return this.tareaService.getTarea(id);
        } else {
          this.title = 'Crear Tarea';
          return of(new TareaNew());
        }
      })
    ).subscribe(
      tarea => {this.tarea = tarea; console.log(tarea);}, 
      error => {console.log(error)}
    );
  }

  onSubmit(){
    if (!this.tarea) return;

    if (this.tarea instanceof TareaNew)
      this.tareaService.addTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    else
      this.tareaService.updateTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
  }
}
