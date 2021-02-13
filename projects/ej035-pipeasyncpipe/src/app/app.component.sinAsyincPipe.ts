import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  promiseData:string;
  observableData:string;
  observableSubs: Subscription = null;

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
    this.getPromise().then( v => this.promiseData = v );
    this.observableSubs = this.getObservable()
                                .subscribe( v => this.observableData = v );
  }

  ngOnDestroy(){ if (this.observableSubs) this.observableSubs.unsubscribe();  }
}
