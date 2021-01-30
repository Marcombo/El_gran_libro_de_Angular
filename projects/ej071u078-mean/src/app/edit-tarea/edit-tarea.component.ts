import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.scss']
})
export class EditTareaComponent implements OnInit {
  tarea: TareaModel | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router, private tareaService: TareaService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => 
        (id ? this.tareaService.getTarea(id) : of(new TareaModel()))
      )
    ).subscribe(
      tarea => {this.tarea = tarea; console.log(tarea);}, 
      error => {console.log(error)}
    );
  }

  onSubmit(){
    if (!this.tarea) return;

    if (this.tarea._id)
      this.tareaService.updateTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
    else
      this.tareaService.addTarea(this.tarea)
        .subscribe(data => {console.log(data); this.router.navigate(['/tareas']);},error=>console.log(error));
  }
}
