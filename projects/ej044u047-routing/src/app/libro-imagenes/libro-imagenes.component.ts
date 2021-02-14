import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css']
})
export class LibroImagenesComponent implements OnInit {

  idLibro: number | undefined;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent?.paramMap
      .subscribe((params: ParamMap) => {
        let id = params.get('id');
        if (id) {
          this.idLibro = Number(id);
        } else {
          this.idLibro = undefined;
        }
      });
  }

}
