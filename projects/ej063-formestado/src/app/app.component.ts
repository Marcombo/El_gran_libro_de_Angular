import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '063 formEstado';
  codigoClassName: Observable<string>|null = null;
  nombreClassName: Observable<string>|null = null;
  emailClassName: Observable<string>|null = null;
  movilClassName: Observable<string>|null = null;
  @ViewChild('codigo') codigo!: ElementRef;
  @ViewChild('nombre') nombre!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('movil') movil!: ElementRef;

  ngAfterViewInit() {
    this.codigoClassName = this.className(this.codigo.nativeElement);
    this.nombreClassName = this.className(this.nombre.nativeElement);
    this.emailClassName = this.className(this.email.nativeElement);
    this.movilClassName = this.className(this.movil.nativeElement);
  }

  className(element: any): Observable<string> {
    return interval(500).pipe(
      map(() => {
        return element.className;
      })
    );
  }
}
