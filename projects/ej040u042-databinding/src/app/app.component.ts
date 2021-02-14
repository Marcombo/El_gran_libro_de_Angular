import { Component } from '@angular/core';
import { Libro } from './libro.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  libro: Libro = {"titulo": "Hamlet", "autor": "William Shakespeare", "precio": 21.30, "stock": 5, "cantidad": 0, "imagen": "assets/old-books.jpg"};

  downCantidad(libro: Libro){
    if (libro.cantidad > 0 ) libro.cantidad--;
  }
  upCantidad(libro: Libro){
    if (libro.cantidad < libro.stock ) libro.cantidad++;
  }
  getCoord(event: any) {  console.log(event.clientX + ", " + event.clientY); }
}
