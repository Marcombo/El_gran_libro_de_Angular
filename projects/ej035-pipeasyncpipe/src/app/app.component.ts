import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promiseObj: Promise<string>;
  observableObj: Observable<string>;


  getPromise(){
    return new Promise<string>(function(resolve, reject) {
        setTimeout(() => {resolve("Timer1 finalizado");}, 2000);
    });
  }
  getObservable() {
    return new Observable<string>(observer => {
        setTimeout(() => {observer.next("Timer2 finalizado");}, 4000);
    });
  }

  constructor() {
    this.promiseObj = this.getPromise();
    this.observableObj = this.getObservable();
  }

}
