import { Injectable } from '@angular/core';

type Rol = 'user' | 'admin';

export interface Usuario {
  email: string;
  password: string; // Solo para validar
  role: Rol;
}

export interface Sesion {
  email: string;
  role: Rol;
}

@Injectable({ providedIn: 'root' })

export class AuthService {
  // "Base de datos" de práctica (cliente)
  private usuarios: Usuario[] = [
    { email: 'usu1@mail.com',  password: '1234', role: 'user'  },
    { email: 'usu2@mail.com',  password: '1234', role: 'user'  },
    { email: 'admin@mail.com', password: '1234', role: 'admin' }
  ];

  // Valida credenciales y devuelve la sesión (email + rol), o null si no coincide
  validarCredenciales(email: string, password: string): Sesion | null {
    let usuarioEncontrado: Usuario | null = null;

    // Búsqueda
    for (const usuario of this.usuarios) {
      const coincideEmail = usuario.email === email;
      const coincidePassword = usuario.password === password;
      if (coincideEmail && coincidePassword) {
        usuarioEncontrado = usuario;
        break;
      }
    }

    if (usuarioEncontrado !== null) {
      const sesion: Sesion = {
        email: usuarioEncontrado.email,
        role: usuarioEncontrado.role
      };
      return sesion;
    } else {
      return null;
    }
  }

  // Guarda la sesión en localStorage
  guardarSesion(sesion: Sesion): void {
    const jsonSesion = JSON.stringify(sesion);  // objeto → texto JSON
    localStorage.setItem('sesion', jsonSesion);
  }

  // Lee la sesión del storage (o null si no hay)
  leerSesion(): Sesion | null {
    const jsonSesion = localStorage.getItem('sesion');
    if (jsonSesion === null) {
      return null;
    } else {
      const sesion: Sesion = JSON.parse(jsonSesion) as Sesion;
      return sesion;
    }
  }

  // Borra la sesión (logout)
  borrarSesion(): void {
    localStorage.removeItem('sesion');
  }
}
