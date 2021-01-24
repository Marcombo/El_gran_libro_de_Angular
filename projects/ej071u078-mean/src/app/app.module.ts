import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTareaComponent } from './edit-tarea/edit-tarea.component';
import { TareaListaComponent } from './tarea-lista/tarea-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { TareaService } from './shared/tarea.service';

@NgModule({
  declarations: [
    AppComponent,
    EditTareaComponent,
    TareaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
