// app.routes.ts
import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdminComponent } from './admin/admin.component';
import { LoginPage } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { userGuard } from './guards/user.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  // públicas
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginPage },

  // solo user (el guard en el padre cubre /contacto y /contacto/perfil)
  {
    path: 'contacto',
    component: ContactoComponent,
    canActivate: [userGuard],
    children: [
      { path: 'perfil', component: PerfilComponent },
    ],
  },
  {
    path: 'producto',
    component: ProductoComponent,
    canActivate: [userGuard],
  },

  // solo admin
  { path: 'admin', component: AdminComponent, canActivate: [adminGuard] },

  // redirect root (sin espacio)
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // 404
  { path: '**', component: NoEncontradoComponent },
];
