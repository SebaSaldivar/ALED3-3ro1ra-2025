// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';
import { PersonajeDetailComponent } from './personaje-detail/personaje-detail.component';
import { LoginPage } from './login/login.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personajes' },
  { path: 'login', component: LoginPage },          
  { path: 'inicio', component: InicioComponent },
  { path: 'personajes', component: MainComponent },
  { path: 'personajes/:id', component: PersonajeDetailComponent },
  { path: '**', redirectTo: 'personajes' }
];