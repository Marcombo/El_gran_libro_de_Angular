import { Component } from '@angular/core';
import { concat, from, interval, merge, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    //Descomente el ejemplo que desee probar
    
    //this.testOperadorCreate();
    //this.testOperadorInterval();
    //this.testOperadorOf();
    //this.testOperadorFrom1();
    //this.testOperadorFrom2();
    //this.testOperadorMap();
    this.testOperadorMerge();
    // this.testOperadorConcat();
    //this.testOperadorTap();
  }

  testOperadorCreate() {
    var source = new Observable( observer => { observer.next(0); observer.next(1); observer.complete();});
    source.subscribe(x => console.log(x));
  }

  testOperadorInterval() {
    var source = interval(1000); //Emite secuencia 0, 1, 2, ... cada 1 segundo
    source.subscribe(x => console.log(x));
  }

  testOperadorOf() {
    var source = of('a','b','c'); //Emite secuencia ‘a’, ‘b’ y ‘c’
    source.subscribe(x => console.log(x));
  }

  testOperadorFrom1() {
    var source = from(
      new Promise<string>( (resolve, reject) => {
          setTimeout(() => { resolve("Valor resuelto por la Promise."); }, 2000);
      })
    );
    source.subscribe(x => console.log(x));
  }

  testOperadorFrom2() {
    var source = from([{nombre: 'Miguel', edad: 30}, {nombre: 'Juan', edad: 35}]);
    source.subscribe(x => console.log(x));
  }

  testOperadorMap() {
    var source = interval(1000).pipe(map(x => 2 * x)); //Emite secuencia 0, 2, 4, ...
    source.subscribe(x => console.log(x));
  }

  testOperadorMerge() {
    var source1 = interval(1000);
    var source2 = interval(1000).pipe(map(x => 10 * x));
    var source3 = merge(source1, source2); //Emite secuencia 0, 0, 1, 10, 2, 20,...
    source3.subscribe(x => console.log(x));
  }

  testOperadorConcat() {
    var source1 = of('a','b','c');
    var source2 = of('d','e','f');
    var source3 = concat(source1, source2); //Emite secuencia a, b, c, d, e, f
    source3.subscribe(x => console.log(x));
  }

  testOperadorTap() {
    var source = of('a','b','c').pipe(tap(x => console.log(x))); //Emite secuencia ‘a’, ‘b’ y ‘c’, y muestra estos valores por log
    source.subscribe(x => console.log(x));
  }

}
