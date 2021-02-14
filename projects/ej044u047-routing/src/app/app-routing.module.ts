import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorListaComponent } from './autor-lista/autor-lista.component';
import { LibroDetalleComponent } from './libro-detalle/libro-detalle.component';
import { LibroListaComponent } from './libro-lista/libro-lista.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Configuración de rutas
const appRoutes: Routes = [
  { path: 'libros', component: LibroListaComponent },
  { path: 'libros/:id', component: LibroDetalleComponent },
  { path: 'autores', component: AutorListaComponent },
  { path: '', redirectTo: '/libros', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
