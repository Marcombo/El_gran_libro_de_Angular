import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';
import { TestInterceptor } from './testInterceptor';
import { TestInterceptor2 } from './testInterceptor2';

@NgModule({
  declarations: [
    AppComponent,
    HttpClientTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true },
             { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor2, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
