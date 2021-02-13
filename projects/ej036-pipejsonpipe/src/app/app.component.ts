import { Component } from '@angular/core';

import {Escritor} from './escritor';
import {Libro} from './libro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  libro1: Libro = new Libro('Mucho ruido y pocas nueces', 'Comedia');
  libro2: Libro = new Libro('Romeo y Julieta', 'Drama');
  librosArray: Libro[] = [this.libro1, this.libro2];

  escritor = new Escritor (1, 'William Shakespeare', new Date(1564, 3, 26), this.librosArray);
}
