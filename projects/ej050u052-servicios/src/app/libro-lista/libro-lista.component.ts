import { Component, OnInit } from '@angular/core';
import{ Libro } from'../libro.model';
import { LIBROS } from '../mocks';
import { LibroService } from '../libro.service';
import { LoggerService } from '../logger.service';
import { LibroObservableService } from '../libro-observable.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
  libros: Libro[] = [];
  observableSubs: Subscription;

  constructor(private libroService: LibroService, private loggerService: LoggerService, private libroObservableService: LibroObservableService){  
    //Si libroService devuelve coleccion de Libros
    //this.libros = this.libroService.getLibros();

    //Si libroService devuelve una promesa de coleccion de Libros
    //Ejemplo 1:
    //this.libroService.getLibros().then(libros => this.libros = libros);
    //Ejemplo 2:
    /*
    this.libroService.getLibros()
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 1º then");
        return libros;
      }
    )
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 2º then");
        return new Promise<Libro[]>((resolve, reject) => { // (*)
            this.loggerService.log("Inicio ejecutor (Promise del 2º then)");
            setTimeout(() => {
              this.loggerService.log("Fin ejecutor (Promise del 2º then)");
              resolve(libros);
            }, 5000);
          });
      }
    )
    .then(
      libros => {
        this.loggerService.log("Ejecucion del 3º then");
        this.libros = libros;
      }
    );
    */
    
    //libroObservableService devuelve un observable que devuelve colecciones de Libros
    this.observableSubs= this.libroObservableService.getLibros()
    .subscribe(
      libros => this.libros = libros,
      error => console.log(error),
      () => console.log("this.libroObservableService.getLibros() FINALIZADO")
    );
  }

  ngOnInit() {}

  ngOnDestroy(){ if (this.observableSubs) this.observableSubs.unsubscribe();  }
}
