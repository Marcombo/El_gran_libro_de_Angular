import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {

  libros: Libro[];
  
  constructor() { 
    this.libros = LIBROS;
  }

}
