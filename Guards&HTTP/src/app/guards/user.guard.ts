import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService, Sesion } from '../services/auth.service';

export const userGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth   = inject(AuthService);

  const sesion: Sesion | null = auth.leerSesion();

  if (sesion === null) {
    // No hay sesión → al login
    return router.createUrlTree(['/login']);
  }

  const rol = sesion.role; // 'user' | 'admin'
  
  if (rol === 'user' || rol === 'admin') {
    return true;
  } else {
    // Valor inesperado → mandamos a una ruta segura
    return router.createUrlTree(['/inicio']);
  }
};
