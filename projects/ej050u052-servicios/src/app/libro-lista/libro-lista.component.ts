import { Component, OnInit } from '@angular/core';
import{ Libro } from'../libro.model';
import { LIBROS } from '../mocks';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private libroService: LibroService){  }
  ngOnInit() {    this.libros = this.libroService.getLibros();  }
}
