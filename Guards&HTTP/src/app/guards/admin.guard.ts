import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, Sesion } from '../services/auth.service';


export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth   = inject(AuthService);

  const sesion: Sesion | null = auth.leerSesion();
  
  if (sesion === null) {
    // No hay sesión → al login
    return router.createUrlTree(['/login']);
  }

  if (sesion.role === 'admin') {
    return true; // solo admin pasa
  } else {
    // Logueado pero sin permiso → a una ruta segura
    return router.createUrlTree(['/inicio']);
  }
};
