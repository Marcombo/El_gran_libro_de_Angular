import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';
import { NumberPipesComponent } from './number-pipes/number-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    NumberPipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
