import { Component, OnInit } from '@angular/core';
import{ Libro } from'../libro.interface';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
  libros: Libro[];

  constructor() { 
    this.libros = LIBROS;
  }

  ngOnInit() {    
  }

}
