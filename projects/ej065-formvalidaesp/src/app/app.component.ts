import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej065-formvalidaesp';
  codigoClassName: Observable<string>|null = null;
  nombreClassName: Observable<string>|null = null;
  @ViewChild('_codigo') _codigo!: ElementRef;
  @ViewChild('_nombre') _nombre!: ElementRef;

  ngAfterViewInit() {
    this.codigoClassName = this.className(this._codigo.nativeElement);
    this.nombreClassName = this.className(this._nombre.nativeElement);
  }

  className(element: any): Observable<string> {
    return interval(500).pipe(
      map(() => {
        return element.className;
      })
    );
  }
}
