import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PersonajeDetailComponent } from './personaje-detail/personaje-detail.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personajes' },
  { path: 'inicio', component: InicioComponent },
  { path: 'personajes', component: MainComponent },
  { path: 'personaje/:id', component: PersonajeDetailComponent },
  { path: '**', redirectTo: 'personajes' }
];
